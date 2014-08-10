'use strict';

var net = require('net');

var socket = net.connect({
  port : 2014,
  host : 'localhost'
}, function onConnected() {
  console.log('connected to server');
  socket.write('echo this');
  socket.end(function onEnded() {
    console.log('connection closed');
  });
});

socket.on('data', function onData(data) {
  console.log(data.toString());
});