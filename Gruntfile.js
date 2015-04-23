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
            }
        },

        watch: {
            run: {
                files: ['src/**'],
                options: {
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('run', ['connect:run', 'watch:run']);

};