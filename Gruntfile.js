'use strict';

module.exports = function(grunt) {
 
    // configure grunt
    grunt.initConfig({
 
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "build/app_babel.js": "src/app.js"
                }
            }
        },

        "browserify": {
            dist: {
                files: {
                    "build/app_browserified.js": "build/app_babel.js"
                },
                options: {
                    browserifyOptions: {
                        debug: false
                    }
                }
            }
        }

    });
 
    // Load plug-ins
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');

    // define tasks
    grunt.registerTask('default', [
        'babel', 'browserify'
    ]);
};
