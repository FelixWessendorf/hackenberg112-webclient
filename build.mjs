#!/usr/bin/env node
import { readFileSync, writeFileSync, copyFileSync, mkdirSync, rmSync, readdirSync, statSync } from 'fs';
import { join, dirname, basename, resolve } from 'path';
import { transformSync } from 'esbuild';
import less from 'less';
import { minify as minifyHtml } from 'html-minifier-terser';

const SRC = 'src';
const DIST = 'dist';

function ensureDir(dir) {
    mkdirSync(dir, { recursive: true });
}

function walk(dir) {
    const files = [];
    for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        statSync(full).isDirectory() ? files.push(...walk(full)) : files.push(full);
    }
    return files;
}

// 1. Clean
console.log('clean...');
rmSync(DIST, { recursive: true, force: true });

// 2. HTML: build-comment-Blöcke ersetzen + minifizieren
console.log('html...');
const timestamp = Math.floor(Date.now() / 1000);
for (const file of walk(SRC).filter(f => f.endsWith('.html'))) {
    let html = readFileSync(file, 'utf8');

    html = html.replace(/<!-- build:css:dist (\S+?) -->[\s\S]*?<!-- \/build -->/g,
        (_, f) => `<link rel="stylesheet" href="${f.split('?')[0]}?${timestamp}">`);

    html = html.replace(/<!-- build:js:dist (\S+?) -->[\s\S]*?<!-- \/build -->/g,
        (_, f) => `<script src="${f.split('?')[0]}?${timestamp}"></script>`);

    html = html.replace(/<!-- build:remove:dist -->[\s\S]*?<!-- \/build -->/g, '');

    html = await minifyHtml(html, { removeComments: true, collapseWhitespace: true, minifyJS: true });

    const dest = join(DIST, file.slice(SRC.length + 1));
    ensureDir(dirname(dest));
    writeFileSync(dest, html);
}

// 3. LESS → CSS kompilieren (komprimiert, Fontpfad anpassen)
console.log('less...');
const lessSource = readFileSync(join(SRC, 'less', 'main.less'), 'utf8');
const { css: compiledCss } = await less.render(lessSource, {
    paths: [resolve(SRC, 'less')],
    compress: true
});

// 4. main.min.css: Bootstrap + eigenes CSS zusammenführen
console.log('css...');
const bootstrapCss = readFileSync(join(SRC, 'css', 'lib', 'bootstrap.min.css'), 'utf8');
writeFileSync(
    join(DIST, 'main.min.css'),
    [bootstrapCss, compiledCss].map(c => c.replace(/\.\.\/fonts/g, 'fonts')).join('\n')
);

// 5. Eigene JS-Dateien minifizieren
console.log('js...');
const API_URL = 'https://api.hackenberg112.de';
const ownJsFiles = readdirSync(join(SRC, 'js')).filter(f => f.endsWith('.js') && !f.endsWith('.min.js'));

const minifiedJs = Object.fromEntries(
    ownJsFiles.map(file => {
        const code = readFileSync(join(SRC, 'js', file), 'utf8')
            .replace(/http:\/\/localhost:7070/g, API_URL);
        const { code: minified } = transformSync(code, { minify: true, drop: ['console'], target: 'es5' });
        return [file, minified];
    })
);

// 6. main.min.js: Libs (feste Reihenfolge) + eigene JS zusammenführen
console.log('bundle...');
const libOrder = [
    'underscore-min.js', 'jquery.min.js', 'angular.min.js', 'angular-route.min.js',
    'angular-locale_de-de.min.js', 'moment.min.js', 'de.min.js', 'angular-moment.min.js',
    'bootstrap.min.js', 'ui-bootstrap-tpls.min.js'
];
const ownJsOrder = ['app.js', 'api.srv.js'];
const remainingJs = ownJsFiles.filter(f => !ownJsOrder.includes(f));

writeFileSync(
    join(DIST, 'main.min.js'),
    [
        ...libOrder.map(f => readFileSync(join(SRC, 'js', 'lib', f), 'utf8')),
        ...ownJsOrder.map(f => minifiedJs[f]),
        ...remainingJs.map(f => minifiedJs[f])
    ].join(';\n')
);

// 7. Statische Assets kopieren
console.log('assets...');
copyFileSync(join(SRC, '.htaccess'), join(DIST, '.htaccess'));

for (const file of walk(join(SRC, 'img'))) {
    const dest = join(DIST, 'img', file.slice(join(SRC, 'img').length + 1));
    ensureDir(dirname(dest));
    copyFileSync(file, dest);
}

for (const file of walk(join(SRC, 'fonts'))) {
    const dest = join(DIST, 'fonts', basename(file));
    ensureDir(dirname(dest));
    copyFileSync(file, dest);
}

console.log('done.');
