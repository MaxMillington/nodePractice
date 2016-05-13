'use strict';

// declare required modules
var fs = require('fs');
var util = require('util'); // for handy util.format() function

function logEvent(args) {
  var fileCount = args.entries.files.length;
  var dirCount = args.entries.dirs.length;

  console.log(util.format('%s %s: %s; files: %s, dirs: %s.', args.created ? 'created' : 'removed', args.type, args.filename,
      fileCount, dirCount));
}

// declare a data structure to hold files & directories
var entries = {
  files : [],
  dirs : []
};

// declare the directory to be watched
var dir = "./dir";

// initialize the data structure by using fs.readdir(..) then fs.stat(..)
fs.readdir(dir, function onFilenames(err, filenames) {
  if (err) {
    throw err;
  }
  if (!filenames) {
    return;
  }

  filenames.forEach(function onFilename(filename) {

    filename = dir + '/' + filename;

    fs.stat(filename, function onStat(err, stats) {
      if (err) {
        throw err;
      }

      if (stats.isDirectory()) {
        entries.dirs.push(filename);
      } else {
        if (stats.isFile()) {
          entries.files.push(filename);
        }
      }
    });
  });
});

// watch the directory and
// log a message when:
// a file is saved, or
// a file or directory is removed or created
// use functions fs.watch, fs.stat, fs.exists
fs.watch(dir, function onEvent(event, filename) {

  filename = dir + '/' + filename;

  switch (event) {

  case 'error':
    throw new Error('error watching ' + dir);

  case 'change': // file updated
    fs.stat(filename, function onStat(err, stats) {
      if (err) {
        throw err;
      }
      console.log('file ' + filename + ' updated, now of size ' + stats.size);
    });
    break;

  case 'rename': // file renamed, created, or deleted
    var fileIndex = entries.files.indexOf(filename);
    var fileExisted = fileIndex !== -1;
    var dirIndex = entries.dirs.indexOf(filename);
    var dirExisted = dirIndex !== -1;

    fs.exists(filename, function onExistence(exists) {
      if (exists) { // file created

        fs.stat(filename, function onStat(err, stats) {
          if (err) {
            throw err;
          }

          var type;

          if (stats.isFile()) {
            entries.files.push(filename);
            type = 'file';
          }
          if (stats.isDirectory()) {
            entries.dirs.push(filename);
            type = ' dir';
          }

          logEvent({
            type : type,
            filename : filename,
            created : true,
            entries : entries
          });
        });
      } else { // file removed

        var type;
        if (fileExisted) {
          type = 'file';
          entries.files.splice(entries.files.indexOf(filename), 1);
        }
        if (dirExisted) {
          type = ' dir';
          entries.dirs.splice(entries.files.indexOf(filename), 1);
        }

        logEvent({
          type : type,
          filename : filename,
          created : false,
          entries : entries
        });
      }
    });

    break;
  }
});
