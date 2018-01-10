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
app.use(session({ resave: false, saveUninitialized: false, secret: 'super secret string' }));
app.use(methodOverride('_method'));

app.get('/', function(req, res) {
  var pageName = (req.session.user && req.session.user.name) ? './views/index.html' : './views/not_logged_in.html';
  res.sendfile(pageName);
});

app.get('/login', function(req, res) {
  res.sendfile('./views/login.html');
});

app.get('/logout', function(req, res) {
  req.session.user = {};
  res.redirect('/');
});

app.post('/login', function(req, res) {
  if ( req.body.username && req.body.password) {
    req.session.user = { name: req.body.username };
    res.sendfile('./views/success.html');
  }
  else {
    res.sendfile('./views/failure.html');
  }
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
