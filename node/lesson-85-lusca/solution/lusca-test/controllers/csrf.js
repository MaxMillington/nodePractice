'use strict';

var CsrfModel = require('../models/csrf');


module.exports = function (app) {
    var model = new CsrfModel();

    app.get('/', function (req, res) {
        res.render('csrf', model);
    });

    app.post('/', function (req, res) {
        model.name = req.body.name || '(none)';
        res.render('csrf', model);
    });
};
