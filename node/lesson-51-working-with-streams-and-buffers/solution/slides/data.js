'use strict';

var fs = require('fs');

var readable = fs.createReadStream('readable.js');

readable.on('data', function onDataRead(data) {
  if (!data) {
    return;
  }
  data = data.toString();
  console.log(data);
});
