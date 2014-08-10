'use strict';


var CsrfModel = require('../../models/csrf');


module.exports = function (router) {

    var model = new CsrfModel();


    router.get('/', function(req, res) {
        res.render('csrf', model);
    });

    router.post('/', function(req, res) {
        model.name = req.body.name || '(none)';
        res.render('csrf', model);
    });

};
