module.exports = function(grunt) {

  require('time-grunt')(grunt);


  // Project configuration.
  grunt.initConfig({
      clean: {
          pug: ['out_grunt/views'],
          sass: ['out_grunt/styles']
      },
      pug: {
        compile: {
          options: {
            pretty: true
          },
          files: [{
                expand: true,
                ext: ".html",
                cwd: 'JADE-Bootstrap/',
                src: ['**/*.jade'],
                dest: 'out_grunt/views/'
          }]
        }
      },
      sass: {
        options: {
            sourceMap: true
        },
        dist: {
          options: {
            style: 'expanded',
            noCache: true
          },
          files: {'out_grunt/styles/main.css': 'main.scss'}
        }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('views', ['clean:pug', 'pug']);
  grunt.registerTask('styles', ['clean:sass', 'sass']);

};
