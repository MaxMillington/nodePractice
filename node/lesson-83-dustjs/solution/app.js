'use strict';

var config = {"contentPath": "locales",
        "fallback": "en_US"};


var express = require('express'),
    i18n = require('makara'),
    dustjs = require('adaro');

var bodyParser = require('body-parser');

var app = express();

// configure body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('dust', dustjs.dust({ cache: false }));
app.engine('js', dustjs.js({ cache: false }));

//quiz.dust is in views/templates, quiz.properties is in US/en/templates (both files used by makara)
// the . parameter indicates path to needed templates. here, it means templates are in the templates folder
app.set('templates', '.');  

app.set('view engine', 'dust');
app.set('view cache', false);


// Decorate express app with localized template rendering capabilities using config object settings.
i18n.create(app, config);

require('./routes/index')(app);    // Will look for routings in the index.js file under the routes folder


app.listen(3000);
console.log('Express app listening on port 3000');
