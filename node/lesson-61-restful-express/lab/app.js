'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/public', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

// Load our initial "todo" list in memory
fs.readFile('./todo_db.json', function onRead(err, data) {
  if (err) {
    console.log(err);
  }

  app.locals.todos = JSON.parse(data);

  require('./routes')(app);

  http.createServer(app).listen(app.get('port'), function onListening() {
    console.log('Express server listening on port ' + app.get('port'));
  });
});
