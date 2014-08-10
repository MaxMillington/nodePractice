'use strict';

function Product() {
  this.products = [];
}

Product.prototype.add = function(product) {
  if (!product) {
    throw new Error('Product.add requires a product');
  }
  this.products.push(product);
}

Product.prototype.deleteAll = function() {
  this.products = [];
}

Product.prototype.getCount = function() {
  return this.products.length;
}

Product.prototype.doAsync = function(callback) {
  setTimeout(callback, 1500, true);
}

module.exports = Product;
