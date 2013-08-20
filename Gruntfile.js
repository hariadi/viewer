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

    curl: {
      repository: {
        src: ['http://dl-ssl.google.com/android/repository/repository-8.xml'],
        dest: 'src/data/repository-8.xml'
      }
    },

    convert: {
      options: {
        explicitArray: false,
      },
      android: {
        src: ['src/data/repository-8.xml'],
        dest: 'src/data/android.json'
      }
    },

    // Templates
    assemble: {
      options: {
        assets: '_gh-pages/assets',
        data: 'src/data/*.{json,yml}',
        layoutdir: 'src/templates/layouts',
        partials: [
          'src/templates/partials/*.hbs'
        ],
        helpers: 'src/lib/helper.js'
      },
      docs: {
         options: {
          flatten: true,
          layout: 'default.hbs'
        },
        files: [
          { expand: true, cwd: 'src/templates/pages', src: ['*.hbs'], dest: '<%= tmp %>' }
        ]
      },
    },

    prettify: {
      options: {
        prettifyrc: '.prettifyrc'
      },
      pages: {
        files: [
          {expand: true, cwd: '<%= tmp %>', ext: '.html', src: ['*.html'], dest: '<%= ghpages %>'}
        ]
      }
    },

    copy: {
      android: {
        files: [
          {expand: true, cwd: '<%= tmp %>',   src: ['*.html'], dest: '<%= dest %>'},
          {expand: true, cwd: 'src/assets',   src: ['**'], dest: '<%= ghpages %>/assets'},
        ]
      },
      html: {
        files: [
          {expand: true, cwd: '<%= dest %>',   src: ['*.html'], dest: '<%= ghpages %>'}
        ]
      }
    },

    // remove files from previous build.
    clean: {
      ghpages: ['<%= ghpages %>/*.html'],
      dist: ['<%= dest %>'],
      tmp: ['<%= tmp %>']
    }
  });


  // Load npm and local plugins.
  grunt.loadNpmTasks('assemble');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task to be run.
  grunt.registerTask('update', ['curl', 'default']);
  grunt.registerTask('default', ['clean', 'assemble', 'prettify', 'clean:tmp']);
};


