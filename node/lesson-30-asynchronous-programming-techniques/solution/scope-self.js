'use strict';

var fs = require('fs');

function FileThing() {
  this.name = '';

  this.exists = function exists(cb) {
    console.log('Opening: ' + this.name);

    var self = this;

    fs.open(self.name, 'r', function onOpened(err, fd) {
      if (err) {
        if (err.code === 'ENOENT') { // then file didn't exist
          console.log('Failed opening file: ' + self.name);
          return cb(null, false);
        }
        // then there was some other error
        return cb(err);
      }
      fs.close(fd);
      return cb(null, true);
    });
  };
}

var f = new FileThing();
f.name = 'thisFileDoesNotExist';
f.exists(function onExists(err, exists) {
  if (err) {
    return console.log('ERROR! ' + err);
  }
  console.log('file ' + (exists ? 'DOES' : 'does NOT') + ' exist');
});
