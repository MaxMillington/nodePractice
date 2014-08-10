'use strict';

var b = new Buffer('buffer', 'utf8');
var i;

[ 'utf8', 'ascii', 'hex' ].forEach(function each(enc) {
  console.log(enc + ':' + b.toString(enc));
});

for (i = 0; i < b.length; i++) {
  console.log(b[i]);
}
