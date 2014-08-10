'use strict';

var async = require('async');

var assert = require('assert');
var fs = require('fs');

var file = 'auto.js';

function exists(callback) {
  console.log('checking source file existence');
  fs.exists(file, function onExists(exists) {
    callback(exists ? null : new Error('file does not exist!'));
  });
}
function read(callback) {
  console.log('reading source file');
  fs.readFile(file, function onRead(err, contents) {
    if (err) {
      return callback(err);
    }
    contents = contents.toString().split(/\s+/);
    callback(null, contents);
  });
}
function create(callback) {
  console.log('creating destination file');
  fs.open('auto.pseudomin.js', 'w', function onOpen(err, fd) {
    if (err) {
      return callback(err);
    }
    callback(null, fd);
  });
}
function write(callback, results) {
  console.log('writing destination file');
  // TODO: replace with Buffer of string read in function read(callback)
  var buffer = null;
  // TODO: replace fd with the file descriptor returned by create(callback)
  var fd = null;
  fs.write(fd, buffer, 0, buffer.length, null, function onWrite(err) {
    callback(err);
  });
}
function close(callback, results) {
  console.log('closing destination file');
  // TODO: close file whose descriptor was obtained in function create(callback)
}

// TODO: create tasks object for async.auto call
var tasks = {};

// TODO: call async.auto with tasks
