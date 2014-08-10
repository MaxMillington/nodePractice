'use strict';

var fs = require('fs');

var writable = fs.createWriteStream('writable.js.txt', {
  flags : 'w+'
});

writable.write('write me!', 'utf8', function onWritten() {
  console.log('wrote data!');
});
