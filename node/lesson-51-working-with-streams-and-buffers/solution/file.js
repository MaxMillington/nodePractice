'use strict';

var fs = require('fs');
var zlib = require('zlib');

var filename = 'file.js';
var read = fs.createReadStream(filename);
var compress = zlib.createGzip();
var write = fs.createWriteStream(filename + '.gz', {
  flags : 'w+'
});

read.pipe(compress).pipe(write);
