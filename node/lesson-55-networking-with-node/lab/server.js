'use strict';

var net = require('net');

var PORT = 1986;
var sockets = [];

// TODO: when client is connected, append socket to array, add socket end
// listener, add socket data listener, write instructions, store initial
// username on socket
function onClientConnected(socket) {
  console.log('client connected: ' + socket);
}

// TODO: create server object

// TODO: handle server errors

// TODO: start listening on the server port

// TODO: echo message when server is successfully listening
function onServerPortBound() {
  console.log('server listening on port ' + PORT);
}

// TODO: declare array of client sockets

// TODO: write function to remove socket from array on socket close
function onSocketEnd(socket) {
  console.log('client disconnected: ' + socket);
}

// TODO: write function to handle incoming client data
function onSocketData(data, socket) {
  console.log('received data from client');
}

// TODO: shutdown given socket or whole server, including all sockets
function shutdown(socket) {
  if (socket) {
    return console.log('closing client connection: ' + socket);
  }
  console.log('shutting down server');
}
