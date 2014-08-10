'use strict';

var http = require('http');

var options = {
  hostname: 'localhost',
  path: '/',
  port: '3000',
  method: 'POST'
};

var request = http.request(options, function responseListener(response) {
  var s = '';
  response.on('data', function onData(part) {
    s += part;
  });
  response.on('end', function onEnd(part) {
    console.log(s);
  });
});

request.setHeader('Content-Type', 'application/json');
request.write(JSON.stringify([ 'bill', 'bob', 'joe' ]));
request.end();
