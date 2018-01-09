var net = require('net');
var client = net.connect({port: 2014},
  function onConnected() {
    console.log('client connected');
    client.write('world!\r\n');
  });

client.on('end', function() {
  console.log('client disconnected');
});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});
