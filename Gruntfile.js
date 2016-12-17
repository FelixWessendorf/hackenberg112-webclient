module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        connect: {
            run: {
                options: {
                    base: 'src',
                    hostname: '*',
                    port: 8080,
                    middleware: function(connect, options, middlewares) {
                        middlewares.push(function(req,res) { require('fs').createReadStream('src/index.html').pipe(res); });
                        return middlewares;
                    }
                }
            },
            dist: {
                options: {
                    base: 'dist',
                    hostname: '*',
                    port: 8080,
                    middleware: function(connect, options, middlewares) {
                        middlewares.push(function(req,res) { require('fs').createReadStream('dist/index.html').pipe(res); });
                        return middlewares;
                    },
                    keepalive: true
                }
            }
        },

        watch: {
            run: {
                files: ['src/**','!src/bower_components/**'],
                options: {
                    livereload: true
                }
            }
        },

        clean: {
            pre: ['dist'],
            post: ['dist/js','dist/css']
        },

        processhtml: {
            dist: {
                cwd: 'src',
                src: ['**/**.html','!bower_components/**'],
                dest: 'dist',
                expand: true
            }
        },

        htmlmin: {
            dist: {
                cwd: 'dist',
                src: '**/**.html',
                dest: 'dist',
                expand: true,
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS: true
                }
            }
        },

        less: {
            dist: {
                cwd: 'src/less',
                src: '*.less',
                dest: 'dist/css',
                ext: '.css',
                expand: true
            }
        },

        uglify: {
            dist: {
                files: [
                    {
                        cwd: 'src/js',
                        src: ['*.js','!*.min.js'],
                        dest: 'dist/js',
                        ext: '.min.js',
                        expand: true,
                        options: {
                            compress: {
                                drop_console: true
                            }
                        }
                    },
                    {src: 'src/bower_components/angular-i18n/angular-locale_de-de.js', dest: 'dist/js/angular-locale_de-de.min.js'},
                    {src: 'src/bower_components/moment/locale/de.js', dest: 'dist/js/de.min.js'}
                ]
            }
        },

        copy: {
            dist: {
                files: [
                    {src: 'src/bower_components/underscore/underscore-min.js', dest: 'dist/js/underscore-min.js'},
                    {src: 'src/bower_components/jquery/dist/jquery.min.js', dest: 'dist/js/jquery.min.js'},
                    {src: 'src/bower_components/angular/angular.min.js', dest: 'dist/js/angular.min.js'},
                    {src: 'src/bower_components/angular-route/angular-route.min.js', dest: 'dist/js/angular-route.min.js'},
                    {src: 'src/bower_components/moment/min/moment.min.js', dest: 'dist/js/moment.min.js'},
                    {src: 'src/bower_components/angular-moment/angular-moment.min.js', dest: 'dist/js/angular-moment.min.js'},
                    {src: 'src/bower_components/bootstrap/dist/js/bootstrap.min.js', dest: 'dist/js/bootstrap.min.js'},
                    {src: 'src/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js', dest: 'dist/js/ui-bootstrap-tpls.min.js'},
                    {src: 'src/bower_components/bootstrap/dist/css/bootstrap.min.css', dest: 'dist/css/bootstrap.min.css'},
                    {src: 'src/.htaccess', dest: 'dist/.htaccess'},
                    {src: 'src/img/*', dest: 'dist/img', expand: true, flatten: true},
                    {src: 'src/img/chronik/*', dest: 'dist/img/chronik', expand: true, flatten: true},
                    {src: 'src/img/tag-der-offenen-tuer-2014/*', dest: 'dist/img/tag-der-offenen-tuer-2014', expand: true, flatten: true},
                    {src: 'src/fonts/*', dest: 'dist/fonts', expand: true, flatten: true}
                ]
            }
        },

        cssmin: {
            dist: {
                cwd: 'dist/css',
                src:['*.css','!*.min.css'],
                dest: 'dist/css',
                ext: '.min.css',
                expand: true
            }
        },

        replace: {
            dist: {
                src: ['dist/css/bootstrap.min.css','dist/css/main.min.css'],
                overwrite: true,
                replacements: [{from: '../fonts', to: 'fonts'}]
            }
        },

        concat: {
            dist: {
                files: [
                    {
                        src: ['dist/js/underscore-min.js',
                            'dist/js/jquery.min.js',
                            'dist/js/angular.min.js',
                            'dist/js/angular-route.min.js',
                            'dist/js/angular-locale_de-de.min.js',
                            'dist/js/moment.min.js',
                            'dist/js/.de.min.js',
                            'dist/js/angular-moment.min.js',
                            'dist/js/bootstrap.min.js',
                            'dist/js/ui-bootstrap-tpls.min.js',
                            'dist/js/less.min.js',
                            'dist/js/app.min.js',
                            'dist/js/api.srv.min.js',
                            'dist/js/*.min.js'],
                        dest: 'dist/main.min.js',
                        options: {
                            separator: ';\n'
                        }
                    },
                    {
                        src: ['dist/css/bootstrap.min.css','dist/css/*.min.css'],
                        dest: 'dist/main.min.css',
                        options: {
                            separator: '\n'
                        }
                    }
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('run', ['connect:run','watch:run']);
    grunt.registerTask('dist', ['clean:pre','processhtml','htmlmin','less','uglify','copy','cssmin','replace','concat','clean:post']);
    grunt.registerTask('distTest', ['connect:dist']);

};