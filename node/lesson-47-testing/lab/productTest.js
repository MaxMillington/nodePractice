'use strict';

var assert = require('assert');
var Product = require('./product');
var product = new Product();

suite('product suite', function productSuite() {
  test('add and delete', function() {
    product.add('party')
    assert.equal(product.getCount(), 1)
    product.deleteAll()
    assert.equal(product.getCount(), 0)
  })
  test('doAsyncTest', function doAsyncTest(done) {
    product.doAsync(function callback(value) {
      assert.equal(value, true)
      done()
    })
  })
});
