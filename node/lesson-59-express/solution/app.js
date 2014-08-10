'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

if ('development' === app.get('env')) {
  app.use(errorHandler());
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
