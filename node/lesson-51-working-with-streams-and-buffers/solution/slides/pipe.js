'use strict';

var fs = require('fs');
var zlib = require('zlib');

var read = fs.createReadStream('pipe.js');
var compress = zlib.createGzip();
var write = fs.createWriteStream('pipe.js.gz');
read.pipe(compress).pipe(write);
