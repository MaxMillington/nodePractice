'use strict';

var http = require('http');

var requestListener = function requestListener(request, response) {
  response.writeHead(200, {
    'Content-Type' : 'text/plain'
  });
  response.end('Hello World\n');
};

var server = http.createServer(requestListener);

server.listen(3000);

console.log('Server running at http://localhost:3000/');
