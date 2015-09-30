'use strict';

var net = require('net');
var fs = require('fs');

var PORT = 1986;
var server;

// create server object
//  send a line to the console for each connection
//  listen to the 'data' event on the SOCKET
//      Convert the data to a string, trim the trailing EOL
//      if the input from the user is 'quit', then QUIT
//      if the input is 'ls' or 'dir', then return a directory listing
//          hint: use fs.readdir() to get an array of files / directorys
//      if the input is 'pwd', then return the current folder name
//          hint: use fs.realpath() to convert the local folder to a real file namd
//



// listen for the 'error' event on the server, display a console message



// listen() on the port and display a console message when it is ready

