'use strict';

var async = require('async');

async.auto({
  getData : function getData(callback) {
    console.log('get data here');
    callback(null, 'data', 'converted to array');
  },
  makeFolder : function makeFolder(callback) {
    console.log('make folder here');
    callback(null, 'folder');
  },
  writeFile : [ 'getData', 'makeFolder', function writeFile(callback, results) {
    console.log('write file here');
    callback(null, 'filename');
  } ],
  emailLink : [ 'writeFile', function emailLink(callback, results) {
    console.log('create email link here');
    callback(null, {
      'file' : results.writeFile,
      'email' : 'user@example.com'
    });
  } ]
}, function onDone(err, results) {
  console.log('err = ', err);
  console.log('results = ', results);
});