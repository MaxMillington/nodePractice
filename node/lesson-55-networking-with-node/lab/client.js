/**
 * Created by clboyd on 3/8/16.
 */

var net = require('net');

var client = net.connect({port: 1986}, function onConnect() {
  console.log('Client connected.');
});

client.on('data', function(data) {
  console.log(data.toString());
});

client.on('end', function() {
  console.log('End...');
  process.exit();
});

process.stdin.on('data', function(data) {
  client.write(data.toString());
});
