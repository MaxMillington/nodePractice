'use strict';

function rnd(arr) {
  return Math.floor(Math.random() * arr.length);
}

var offset = 0;

function writeNicely(out, items, encoding, count, callback) {
  var i = count;

  function write() {
    var written = true;
    var item;
    do {
      i -= 1;
      item = items[rnd(items)];
      written = (out.write(item, offset, item.length, encoding) === item.length);
      offset += Buffer.byteLength(item);

      if (i === 0) {
        return callback();
      }
    } while (i > 0 && written);

    if (i > 0) {
      out.once('drain', write);
    }
  }

  write();
}

var mom = new Buffer(10000);
mom.fill('\u0000');

var names = [ 'Lois! ', 'Mom! ', 'Mum! ', 'Mommy! ', 'Mama! ', 'Mumma! ', 'Mummy! ', 'Ma! ' ];

writeNicely(mom, names, 'utf8', 26, function onWhat() {
  mom.write('... Hi!', offset);
  console.log(mom.toString());
}); // see http://goo.gl/YAY1O
