'use strict';

var net = require('net');
var fs = require('fs');

var PORT = 1986;
var server;

function ls(socket) {
    console.log('ls function called.');
    socket.write('ls called \n');
    fs.readdir('.', function (err, files) {
        if (err) return console.log(err);
        files.forEach(function (file) {
            socket.write(file + '\n');
        });
    });
}

function pwd(socket) {
    console.log('pwd function called.');
    socket.write('pwd called \n');
    fs.realpath('.', function (err, path) {
        if (err) return console.log(err);
        socket.write(path + '\n');
    });
}

function quit(socket) {
    console.log('quit function called.');
    socket.end('quit called. \n');
}

// create server object
server = net.createServer(function (socket) {

    console.log('client connected, address = ' + socket.remoteAddress + ' , port = ' + socket.remotePort);

    socket.on('data', function onData(data) {
        data = data.toString().trim();

        console.log('Received data: ' + data);

        // process the command lines
        // LS should return the directory listing of the current directory
        // PWD should return the name of the current directory
        // Feel free to create a function handling each command.
        switch (data) {
            case 'ls':
                ls(socket);
                break;
            case 'pwd':
                pwd(socket);
                break;
            case 'quit':
                quit(socket);
                break;
            default:
                socket.write('Invalid commnad: ' + data + "\n");
        }
    });

    socket.write('Welcome to the FTP Server. Commands are LS, PWD, etc.\n');

});

// handle server errors
server.on('error', function onError(e) {
    console.log(e);
    throw e;
});

// start listening on the server port
server.listen(PORT, function () {
    console.log('server listening on port ' + PORT);
});
