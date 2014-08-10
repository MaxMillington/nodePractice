'use strict';

var async = require('async');
var assert = require('assert');

function firstTwo(callback) {
  callback(null, 1, 2);
}
function addOneToSum(first, second, callback) {
  callback(null, first + second + 1);
}
var functions = [ firstTwo, addOneToSum ];

async.waterfall(functions, function onDone(err, result) {
  if (err) {
    throw err;
  }
  assert.strictEqual(result, 4);
});
