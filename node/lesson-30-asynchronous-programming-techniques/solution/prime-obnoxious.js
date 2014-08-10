'use strict';

function computePrimes(limit, callback) {
  if (limit <= 1) {
    throw new Error('invalid limit');
  }
  if (limit <= 2) {
    return callback([ 1 ]);
  }
  if (limit <= 3) {
    return callback([ 1, 2 ]);
  }

  var primes = [ 1, 2 ];
  var candidate = 3;
  var factor = 2;

  var divisible;
  var exhausted;
  while (candidate < limit) {

    divisible = (candidate % factor === 0);
    exhausted = (factor + 1 === candidate);

    if (divisible || exhausted) {
      if (!divisible) {
        primes.push(candidate);
      }
      candidate++;
      factor = 2;
    } else {
      factor++;
    }
  }

  callback(primes);
}

var start = new Date().getTime();
computePrimes(100000, function onComplete(primes) {
  var time = (new Date().getTime() - start) / 1000.0;
  console.log(primes.length + ' primes');
  console.log(time + ' secs');
});
