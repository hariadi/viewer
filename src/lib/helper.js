// These are some really brittle experimental helpers. I'm just having some fun
// playing around for our docs, but I strongly recommend you not use these on
// your own projects. - Jon

(function() {

  module.exports.register = function(Handlebars, options) {

    Handlebars.registerHelper('reversed', function(arr) {
      var result = [],
       ii = arr.length;
	   for (var i = ii - 1;i !== 0;i--) {
	       result.push(arr[i]);
	   }
	   return result;
    });


  };

}).call(this);