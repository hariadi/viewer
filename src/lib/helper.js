// Base on Assemble withSort helper

(function() {

  reversed: reversed = function(array, options) {
      var getDescendantProp, item, result, _i, _len;
      getDescendantProp = function(obj, desc) {
        var arr;
        arr = desc.split(".");
        while (arr.length && (obj = obj[arr.shift()])) {
          continue;
        }
        return obj;
      };
      result = '';
      array = array.reverse();
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        item = array[_i];
        result += options.fn(item);
      }

      return result;
    };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper('reversed', reversed);
  };

}).call(this);