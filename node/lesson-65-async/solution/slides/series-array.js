'use strict';

var async = require('async');
var assert = require('assert');

function one(callback) {
  callback(null, 1);
}
function two(callback) {
  callback(null, 2);
}
var functions = [ one, two ];

async.series(functions, function onDone(err, results) {
  if (err) {
    throw err;
  }
  assert.deepEqual(results, [ 1, 2 ]);
});
