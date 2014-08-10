'use strict';

var assert = require('assert');
var Product = require('./Product');

// Using BDD style


describe('Product', function () {

  var product;

  beforeEach(function(done) {
    //console.log('beforeEach');
    product = new Product();
    done();
  });

  afterEach(function(done) {
    //console.log('afterEach');
    product = null;
    done();
  });


  describe('#deleteAll', function () {
    it('should have 0 products after deleteAll', function () {
      product.deleteAll();
      assert.equal(product.getCount(), 0);
    });
  });
  describe('#add', function () {
    it('should have two products after add called 2 times', function () {
      product.deleteAll();
      product.add('Aeropress');
      product.add('Coffee Grinder');
      assert.equal(product.getCount(), 2);
    });
  });
  describe('#async', function () {
    it('should return true', function (done) {
      product.doAsync(function callback(value) {
        assert.equal(value, true);
        done();
      });
    });
  });
});