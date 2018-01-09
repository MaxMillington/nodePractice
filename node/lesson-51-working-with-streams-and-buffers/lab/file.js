'use strict'

var zlib = require('zlib')
var fs = require('fs')

var read = fs.createReadStream('file.js');
var compress = zlib.createGzip();
var write = fs.createWriteStream('file.js' + '.gz', {
  flags : 'w+'
});

read.pipe(compress).pipe(write)