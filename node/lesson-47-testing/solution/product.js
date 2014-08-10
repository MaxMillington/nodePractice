'use strict';

function Product() {
  this.products = [];
}

Product.prototype.add = function add(product) {
  if (!product) {
    throw new Error('Product.add requires a product');
  }
  this.products.push(product);
};

Product.prototype.deleteAll = function deleteAll() {
  this.products = [];
};

Product.prototype.getCount = function getCount() {
  return this.products.length;
};

Product.prototype.doAsync = function doAsync(callback) {
  setTimeout(callback, 1500, true);
};

module.exports = Product;
