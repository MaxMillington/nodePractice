'use strict';

var async = require('async');
var assert = require('assert');

function one(callback) {
  setTimeout(function afterTwoSecs() {
    callback(null, 1);
  }, 2000);
}
function two(callback) {
  setTimeout(function afterOneSec() {
    callback(null, 2);
  }, 1000);
}
var functions = {
  one : one,
  two : two
};

async.parallel(functions, function onDone(err, results) {
  if (err) {
    throw err;
  }
  assert.deepEqual(results, {
    one : 1,
    two : 2
  });
});
