'use strict'

var zlib = require('zlib')
var fs = require('fs')
var https = require('https')

var compress = zlib.createGzip();
var write = fs.createWriteStream('google.gz', {
  flags : 'w+'
});

https.request({
  hostname : 'www.google.com',
  path : '/search?q=node.js',
  method : 'GET'
}, function onResponse(res) {
  console.log(res.body)
  res.pipe(compress).pipe(write);
}).end();
