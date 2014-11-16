/*
 * viewer
 * https://github.com/hariadi/viewer/
 *
 * Copyright (c) 2013 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Internal lib

  // Project configuration.
  grunt.initConfig({

    // Metadata for templates
    pkg: grunt.file.readJSON('package.json'),

    dest: 'dist',
    tmp: 'tmp',
    ghpages: '_gh-pages',
    theme: 'yeti',

    jshint: {
      all: ['Gruntfile.js', 'src/lib/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      }
    },

    curl: {
      addon: {
        src: ['http://dl-ssl.google.com/android/repository/addon.xml'],
        dest: 'src/data/addon.xml'
      },

      sdk: {
        src: ['http://dl-ssl.google.com/android/repository/repository-10.xml'],
        dest: 'src/data/repository.xml'
      },

      sysimg: {
        src: ['http://dl-ssl.google.com/android/repository/sys-img/android/sys-img.xml'],
        dest: 'src/data/sysimg.xml'
      },
    },

    convert: {
      options: {
        explicitArray: false,
        ignoreAttrs: true,
      },
      sdk: {
        src: ['<%= curl.sdk.dest %>'],
        dest: 'src/data/repository.json'
      },
      addon: {
        src: ['<%= curl.addon.dest %>'],
        dest: 'src/data/addon.json'
      },
      sysimg: {
        src: ['<%= curl.sysimg.dest %>'],
        dest: 'src/data/sysimg.json'
      }
    },

    frep: {
      repository: {
        options: {
          replacements: {
            'sdk:': ''
          }
        },
        files: {
          '<%= convert.sdk.dest %>': ['<%= convert.sdk.dest %>'],
          '<%= convert.addon.dest %>': ['<%= convert.addon.dest %>'],
          '<%= convert.sysimg.dest %>': ['<%= convert.sysimg.dest %>']
        }
      }
    },

    watch: {
      assemble: {
        files: ['src/{content,data,templates}/{,*/}*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'Gruntfile.js',
          '<%= ghpages %>/{,*/}*.html',
          '<%= ghpages %>/assets/{,*/}*.css',
          '<%= ghpages %>/assets/{,*/}*.js',
          '<%= ghpages %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= ghpages %>'
          ]
        }
      }
    },

    // Templates
    assemble: {
      options: {
        production: true,
        flatten: true,
        assets: '<%= ghpages %>/assets',
        data: ['package.json', 'src/data/*.{json,yml}'],
        layoutdir: 'src/templates/layouts',
        layout: 'default.hbs',
        partials: ['src/templates/{includes,partials}/**/*.{hbs,md}'],
        helpers: ['handlebars-helper-prettify', 'src/lib/*.js'],
        plugins: ['assemble-contrib-permalinks', 'assemble-contrib-sitemap'],
        prettify: {
          indent: 2,
          condense: true,
          padcomments: true
        },
        social: false
      },
      // old url, redirection to new format
      redirect: {
        options: {
          layout: 'redirect.hbs',
          permalinks: {
            structure: ':basename:ext',
          },
        },
        files: {
          '<%= ghpages %>/': ['src/templates/pages/**/*.hbs']
        }
      },

      viewer: {
        options: {
          sitemap: {
            dest: '<%= ghpages %>',
            relativedest: true
          },
          permalinks: {
            preset: 'pretty'
          },
        },
        files: {
          '<%= ghpages %>/': ['src/templates/pages/**/*.hbs']
        }
      },
    },

    copy: {
      theme: {
        files: [
          // copy the whole bootstrap dist
          //{ src: ['vendor/bootstrap/dist/*', '!vendor/bootstrap/dist/*-theme.css', '!vendor/bootstrap/dist/*-theme.min.css'], dest: 'src/assets'},
          // replace with bootswatch theme choice
          {expand: true, cwd: 'vendor/bootswatch/<%= theme %>',   src: ['*.css'], dest: 'src/assets/css'},
          { src: 'vendor/jquery/jquery.min.js', dest: 'src/assets/js/jquery.min.js'},
        ]
      },
      android: {
        files: [
          {expand: true, cwd: 'src/assets',   src: ['**'], dest: '<%= ghpages %>/assets'},
        ]
      },
    },

    // remove files from previous build.
    clean: {
      ghpages: ['!<%= ghpages %>/.git*', '<%= ghpages %>/**/*.{html,xml,txt}', '<%= ghpages %>/assets'],
      tmp: ['<%= tmp %>']
    }
  });


  // Load npm and local plugins.
  grunt.loadNpmTasks('assemble');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('serve', [
    'default',
    'connect:livereload',
    'watch'
  ]);

  // Default task to be run.
  grunt.registerTask('update', ['curl']);
  grunt.registerTask('data', ['update', 'convert', 'frep']);
  grunt.registerTask('default', ['jshint', 'clean', 'assemble', 'copy']);
  grunt.registerTask('debug', ['clean', 'assemble']);
};


