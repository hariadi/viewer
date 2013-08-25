(function() {

  reversed: reversed = function(array, count, options) {
      var item, result, _i, _len;

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
