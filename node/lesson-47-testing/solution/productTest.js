'use strict';

var assert = require('assert');
var Product = require('./product');
var product = new Product();

suite('product suite', function productSuite() {

  test('deleteTest', function deleteTest() {
    product.add('Aeropress');
    assert.equal(product.getCount(), 1, '1 product should exist');
    product.deleteAll();
    assert.equal(product.getCount(), 0, 'No products should exist');
  });

  test('addTest', function addTest() {
    product.deleteAll();
    product.add('Coffee Grinder');
    assert.notEqual(product.getCount(), 0, '1 product should exist');
  });

  test('doAsyncTest', function doAsyncTest(done) {
    product.doAsync(function callback(value) {
      assert.equal(value, true, 'Callback should be passed true');
      done();
    });
  });
});
