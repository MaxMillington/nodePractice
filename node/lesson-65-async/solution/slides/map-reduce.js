'use strict';

var async = require('async');

var numbers = [ 1, 2, 3, 4, 5 ];

// goal: calculate the sum of the squares of each element

async.map(numbers, function square(it, callback) {
  try {
    callback(null, it * it);
  } catch (x) {
    callback(x);
  }
}, function onMapped(err, mapped) {
  if (err) {
    throw err;
  }

  async.reduce(mapped, 0, function sum(reduction, it, callback) {
    try {
      callback(null, reduction + it);
    } catch (x) {
      callback(x);
    }
  }, function onReduced(err, reduction) {
    if (err) {
      throw err;
    }
    console.log(numbers + ' reduced to ' + reduction);
  });
});