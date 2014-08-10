'use strict';

var http = require('http');
var url = require('url');

function handleGet(request, response) {
  var contentType;
  var body;
  if (request.headers.accept && request.headers.accept.indexOf('text/html') > -1) {
    var params = url.parse(request.url, true).query;
    var style = params.style || 'h1';
    contentType = 'text/html';
    body = '<' + style + '>Hello World</' + style + '>\n';
  } else {
    contentType = 'text/plain';
    body = 'Hello World\n';
  }
  response.writeHead(200, {
    'Content-Type': contentType
  });
  response.end(body);
}

function writePostResponse(response, names) {
  var body = '';

  names.forEach(function onEach(it) {
    body += 'Hello ' + it + '\n';
  });

  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end(body);
}

function handlePost(request, response) {
  var s = '';
  request.on('data', function onData(chunk) {
    s += chunk;
  });
  request.on('end', function onEnd(chunk) {
    writePostResponse(response, JSON.parse(s));
  });
}

var server = http.createServer(function onRequest(request, response) {
  switch (request.method) {
  case 'GET':
    handleGet(request, response);
    break;
  case 'POST':
    handlePost(request, response);
    break;
  default:
    console.log('Unsupported request method: ' + request.method);
  }
});

server.listen(3000);

console.log('Server running at http://localhost:3000/');
