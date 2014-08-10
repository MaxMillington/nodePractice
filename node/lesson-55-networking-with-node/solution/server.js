'use strict';

var net = require('net');

var PORT = 1986;
var sockets = [];
var server;

function writeln(socket, line) {
  socket.write(line + '\r\n');
}

// on socket close, remove socket from array
function onSocketEnd(socket) {
  var i = sockets.indexOf(socket);
  if (i !== -1) {
    sockets.splice(i, 1);
  }
  console.log('clients: ' + sockets.length);
}

// shutdown given socket or whole server
function shutdown(socket) {
  var i;
  if (socket) {
    i = sockets.indexOf(socket);
    if (i !== -1) {
      socket.end();
      sockets.splice(i, 1);
    }
    return;
  }

  // else shutdown whole server
  server.close(function onClosed() {
    console.log("server shut down");
  });

  for (i = 0; i < sockets.length; i++) {
    sockets[i].end();
  }
  sockets = [];
}

// handle incoming data
function onSocketData(data, socket) {
  data = data.toString();
  if ('/shutdown' === data.toLowerCase().trim()) {
    return shutdown();
  }
  if ('/quit' === data.toLowerCase().trim()) {
    return shutdown(socket);
  }
  if (data.toLowerCase().indexOf('/name:', 0) !== -1) {
    socket.username = data.split(':')[1].trim();
    socket.username = socket.username || 'You';
    return socket.write("Ok, I'll now call you " + socket.username + '!\r\n');
  }
  socket.write(socket.username + ' said: ' + data);
}

// when client is connected, append socket to array, add socket end listener,
// add socket data listener, write instructions, store initial username on
// socket
function onClientConnected(socket) {
  sockets.push(socket);
  console.log('client connected; now ' + sockets.length);
  socket.on('end', function onEnd() {
    onSocketEnd(socket);
  });
  socket.on('data', function onData(data) {
    onSocketData(data, socket);
  });
  writeln(socket, 'Hello.  Usage:');
  writeln(socket, '/name:yourName to tell me your name');
  writeln(socket, '/quit to quit');
  writeln(socket, '/shutdown to shutdown the server');
  writeln(socket, "otherwise I'll just echo 'You said: ' plus what you entered!");

  socket.username = 'You';
}

// create server object
server = net.createServer(onClientConnected);

// handle server errors
server.on('error', function onError(e) {
  console.log(e);

  if (e.code === 'EADDRINUSE') {
    console.log('Port ' + PORT + ' in use.  Retrying...');
    return setTimeout(function onTimeout() {
      server.listen(PORT);
    }, 1000);
  }

  throw e;
});

// echo message when server is successfully listening
function onServerPortBound() {
  console.log('server listening on port ' + PORT);
}

// start listening on the server port
server.listen(PORT, onServerPortBound);
