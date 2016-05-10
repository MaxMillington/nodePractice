'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var morgan = require('morgan');

var LOGGER = ':remote-addr - - [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" REQUEST-COOKIE:req[Cookie] RESPONSE-COOKIE:res[Cookie]';

var app = express();
app.use(morgan(LOGGER));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({ resave: false, saveUninitialized: false, secret: 'super secret string' }));

// configure the routes

app.get('/', function(req, res) {
  res.sendfile('./views/index.html');
});

app.get('/login', function(req, res) {
  res.sendfile('./views/login.html');
});

app.get('/logout', function(req, res) {
  res.sendfile('./views/index.html');
});

app.post('/login', function(req, res) {
  var pageName = (req.body.username && req.body.password) ? './views/success.html' : './views/failure.html';
  res.sendfile(pageName);
});

app.listen(3000, function() {
  console.log('Listening on port, 3000');
});
