'use strict';

var async = require('async');

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
  var buffer = new Buffer(results.read.join(' '));
  fs.write(results.create, buffer, 0, buffer.length, null, function onWrite(err) {
    callback(err);
  });
}
function close(callback, results) {
  console.log('closing destination file');
  fs.close(results.create, function onClosed(err) {
    callback(err);
  });
}

var tasks = {
  exists : exists,
  create : create,
  read : [ 'exists', read ],
  write : [ 'read', 'create', write ],
  close : [ 'write', close ]
};

async.auto(tasks, function onDone(err, result) {
  if (err) {
    return console.log('error: ' + JSON.stringify(err));
  }
  console.log('file ' + file + ' minified ok as ' + file + '.min');
});
