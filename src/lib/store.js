/**
 * var store = require('store');
 * var db = store('./index.json'); 
 * db.set('foo', 'bar');
 * db.get('foo');                // bar 
 * db.set('obj', {foo: 'bar'});
 * db.get('obj').foo             // bar
 */	
var fs = require('fs');

function Store(path) {
  this.path = path;
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
  this.Store = require(path);
}

Store.prototype.get = function(key) {
  if (!key) return clone(this.Store);
  if (!this.Store[key]) return;
  return clone(this.Store[key]);
}

Store.prototype.set = function(key, value) {
  this.Store[key] = clone(value);
  this.save();
}

Store.prototype.remove = function(key) {
  delete this.Store[key];
  this.save();
}

Store.prototype.save = function() {
  fs.writeFileSync(this.path, JSON.stringify(this.Store));
}

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

module.exports = function(path) {
  return new Store(path);
}