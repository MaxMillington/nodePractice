'use strict';

var fs = require('fs');

var readable = fs.createReadStream('readable.js');

readable.on('readable', function onDataAvailable() {
  var data = readable.read();
  if (!data) {
    return;
  }
  data = data.toString();
  console.log(data);
});
