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
    pretty: 'prettify',
    ghpages: '_gh-pages',

    convert: {
      options: {
        explicitArray: false,
      },
      android: {
        src: ['src/data/repository-8.xml'],
        dest: 'src/data/android.json'
      }
    },

    less: {
      options: {
        paths: ['src/less/'],
        yuicompress: true
      },
      main: {
        src:  ['src/less/app.less'],
        dest: 'src/assets/css/app.css'
      }
    },

    // Templates
    assemble: {
      options: {
        assets: 'assets',
        data: 'src/data/*.{json,yml}',
        layoutdir: 'src/templates/layouts',
        partials: [
          'src/templates/partials/*.hbs'
        ],
        helpers: 'helper/helpers.js'
      },
      docs: {
         options: {
          flatten: true,
          layout: 'default.hbs'
        },
        files: [
          { expand: true, cwd: 'src/templates/pages', src: ['*.hbs'], dest: '<%= pretty %>' }
        ]
      },
    },

    prettify: {
      options: {
        prettifyrc: '.prettifyrc'
      },
      pages: {
        files: [
          {expand: true, cwd: '<%= dest %>', ext: '.html', src: ['*.html'], dest: '<%= ghpages %>'}
        ]
      }
    },

    copy: {
      android: {
        files: [
          {expand: true, cwd: '<%= pretty %>',   src: ['*.html'], dest: '<%= dest %>'},
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
      //pretty: ['<%= pretty %>']
    }
  });


  // Load npm and local plugins.
  grunt.loadNpmTasks('assemble');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'less', 'assemble', 'prettify', 'copy']);
};


