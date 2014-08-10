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

app.use(function login(req, res, next) {
  if ('GET' !== req.method) {
    return next();
  }

  if (req.session.user) {
    res.setHeader('Content-Type', 'text/html');
    res.write('Hello ' + req.session.user + '<br/><br/>');
    res.write('<form method="post" action="/?_method=DELETE">');
    res.write('<input type="submit" value="Logout" />');
    res.write('</form>');
    res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('Please log in <br/><br/>');
    res.write('<form method="post">');
    res.write('<input type="text" name="user" />');
    res.write('<input type="password" name="password" />');
    res.write('<input type="submit" value="Login" />');
    res.write('</form>');
    res.end();
  }
});

app.use(function checkAuth(req, res, next) {
  if ('POST' !== req.method) {
    return next();
  }

  var credentialsSet = (req.body.user && req.body.password);
  if (credentialsSet && (req.body.user === 'admin') && (req.body.password === 'password')) {
    req.session.regenerate(function createSession(err) {
      if (err) {
        console.log(err);
      }
      req.session.user = req.body.user;
      res.end("You are now logged in.");
    });
  } else {
    res.end("Invalid credentials - go away");
  }
});

app.use(function logout(req, res) {
  if ('DELETE' !== req.method) {
    res.end("Unexpected server error!");
  }
  req.session.destroy(function logout(err) {
    if (err) {
      console.log(err);
    }
    res.end("Logged out!");
  });
});

app.listen(3000);
