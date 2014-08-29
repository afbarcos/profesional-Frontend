module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        stylus: {
          compile: {
            options: {
              'include css': true,
              'paths': ['css']
            },
            files: {
              'css/styles.css': 'stylus/styles.styl'
            }
          }
        },

        watch: {
        scripts: {
            files: ['stylus/*.styl'],
            tasks: ['stylus'],
            options: {
                livereload: true,
                spawn: false,
            },
        } 
    }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['stylus','watch']);

};