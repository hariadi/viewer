/**
 * Custom Handlebars Helpers
 * Copyright (c) 2013 Hariadi Hinta
 * Licensed under the MIT License (MIT).
 */

'use strict';

// Node.js
var path = require('path');

var helpers = {
  /**
   * {{reversed}}
   * Returns the derived reversed path from A to B.
   * @param  {Array}  array
   * @param  {String}  count
   * @param  {Object} options
   * @return {[String]}   [result]
   * @example:
   *   {{reversed string}}
   */
  reversed: function(array, count, options) {
    var item, result, _i, _len;

    result = '';
    array = array.reverse();
    for (_i = 0, _len = array.length; _i < _len; _i++) {
      item = array[_i];
      result += options.fn(item);
    }
    return result;
  },

  slugify: function(input) {
    if (!input || typeof input !== 'string') {
      return input;
    }

    input = input.replace(/^\s+|\s+$/g, '').toLowerCase();

    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";

    for (var i=0, l=from.length ; i<l ; i++) {
      input = input.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    return input.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  },

  /**
   * {{baseurl}}
   * Returns the filename of a given url.
   * @param  {[type]} file [description]
   * @return {[type]}      [description]
   * @example:
   *   {{baseurl "http://example.com/toc.md"}}
   * @returns:
   *   toc.md
   */
  baseurl: function (file) {
    return path.basename(file);
  },

  forceArray: function (obj, prop) {
    if (Object.prototype.toString.call(obj[prop]) === '[object Array]') {
      return;
    } else {
      obj[prop] = [obj[prop]];
      return;
    }
  },

};

// Export helpers
module.exports.register = function (Handlebars, options) {
  options = options || {};

  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};


