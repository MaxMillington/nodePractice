'use strict';

var async = require('async');
var fs = require('fs');

var files = [ 'test/foo.txt', 'test/bar.txt', 'test/snafu.txt' ];
var contents = {};

function read(file, callback) {
  fs.readFile(file, function onRead(err, data) {
    if (err) {
      callback(err);
    }
    contents[file] = data.toString();
    callback();
  });
}

async.each(files, read, function onDone(err) {
  if (err) {
    return console.log('error: ' + err);
  }
  console.log(contents);
});