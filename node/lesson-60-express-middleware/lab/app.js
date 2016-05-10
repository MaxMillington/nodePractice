'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var morgan = require('morgan');

var LOGGER = ':remote-addr - - [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" REQUEST-COOKIE:req[Cookie] RESPONSE-COOKIE:res[Cookie]';

var app = express();

// configure body-parser

// configure morgan

// configure methodOverride

// configure session

// configure the routes
// use res.sendfile('filename') to send the files to the browser

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
