(function() {

  slugify: slugify = function(input) {
    if (!input || typeof input !== 'string') return input;

    input = input.replace(/^\s+|\s+$/g, '').toLowerCase();

    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";

    for (var i=0, l=from.length ; i<l ; i++) {
      input = input.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    return input.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper('slugify', slugify);
  };

}).call(this);
