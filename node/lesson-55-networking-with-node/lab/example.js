var net = require('net')

var server =
  net.createServer(function onConnect(socket) {
    console.log('client connected');

    socket.on('end', function onEnd() {
      console.log('client disconnected');
    });

    socket.write('Hello!\r\n');
    socket.pipe(socket);
  });

server.listen(2014, function onPortBound() {
  console.log('server listening');
});
