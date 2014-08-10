'use strict';

var fs = require('fs');
var zlib = require('zlib');
var https = require('https');

var compress = zlib.createGzip();
var write = fs.createWriteStream('google.gz', {
  flags : 'w+'
});

https.request({
  hostname : 'www.google.com',
  path : '/?q=node.js',
  method : 'GET'
}, function onResponse(res) {
  res.pipe(compress).pipe(write);
}).end();
