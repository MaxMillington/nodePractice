'use strict';

var fs = require('fs');

function append(callback) {
  fs.open('from.txt', 'r', function onOpened(err, from) {
    if (err) {
      return callback(err);
    }
    var buffer = new Buffer(10);
    fs.read(from, buffer, 0, buffer.length, 0, function onRead(err) {
      if (err) {
        return callback(err);
      }
      fs.close(from, function onClosed(err) {
        if (err) {
          return callback(err);
        }
        fs.open('to.txt', 'a', function onOpened(err, to) {
          if (err) {
            return callback(err);
          }
          fs.fstat(to, function onStats(err, stats) {
            if (err) {
              return callback(err);
            }
            fs.write(to, buffer, 0, buffer.length, stats.size, function onWrite(err) {
              if (err) {
                return callback(err);
              }
              fs.close(to, callback);
            });
          });
        });
      });
    });
  });
}

append(function onDone(err) {
  if (err) {
    throw err;
  }
});