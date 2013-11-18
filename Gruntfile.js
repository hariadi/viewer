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
      addon: {
        src: ['http://dl-ssl.google.com/android/repository/addon.xml'],
        dest: 'src/data/addon.xml'
      },

      sdk: {
        src: ['http://dl-ssl.google.com/android/repository/repository-8.xml'],
        dest: 'src/data/repository.xml'
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
          '<%= convert.addon.dest %>': ['<%= convert.addon.dest %>']
        }
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
        helpers: 'src/lib/*.js'
      },

      viewer: {
         options: {
          flatten: true,
          layout: 'default.hbs',
          //plugins: [ 'permalinks', 'assemble-contrib-toc'],
          //permalinks: {
          //  preset: 'pretty'
          //},
        },
        files: [
          { expand: true, cwd: 'src/templates/pages', src: ['*.hbs'], dest: '<%= tmp %>' }
        ]
      },
    },

    prettify: {
      options: {
        brace_style: 'collapse',
        indent_scripts: 'keep',
        unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u', 'script']
      },
      all: {
        expand: true,
        cwd: '<%= tmp %>',
        ext: '.html',
        src: ['*.html'],
        dest: '<%= ghpages %>'
      },

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
  grunt.registerTask('update', ['curl']);
  grunt.registerTask('data', ['update', 'convert', 'frep']);
  grunt.registerTask('default', ['clean', 'assemble', 'prettify', 'clean:tmp']);
  grunt.registerTask('debug', ['clean', 'assemble']);
};


