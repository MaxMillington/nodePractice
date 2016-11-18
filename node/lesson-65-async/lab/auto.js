'use strict';

var async = require('async');

var fs = require('fs');

var file = 'auto.js';

function exists(done) {
  console.log('checking source file existence');
  fs.exists(file, function onExists(exists) {
    done(exists ? null : new Error('file does not exist!'));
  });
}
function read(results, done) {
  console.log('reading source file');
  fs.readFile(file, function onRead(err, contents) {
    if (err) {
      return done(err);
    }
    contents = contents.toString().split(/\s+/);
    done(null, contents);
  });
}
function create(done) {
  console.log('creating destination file');
  fs.open('auto.pseudomin.js', 'w', function onOpen(err, fd) {
    if (err) {
      return done(err);
    }
    done(null, fd);
  });
}
function write(results, done) {
  console.log('writing destination file');
  // TODO: replace with Buffer of string read in function read(done)
  var buffer = null;
  // TODO: replace fd with the file descriptor returned by create(done)
  var fd = null;
  fs.write(fd, buffer, 0, buffer.length, null, function onWrite(err) {
    done(err);
  });
}
function close(results, done) {
  console.log('closing destination file');
  // TODO: close file whose descriptor was obtained in function create(done)
}

// TODO: create tasks object for async.auto call
var tasks = {};

// TODO: call async.auto with tasks
