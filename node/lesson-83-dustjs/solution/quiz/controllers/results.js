'use strict';

var ResultsModel = require('../models/results');


module.exports = function (router) {

    var model = new ResultsModel();

    router.post('/', function (req, res) {

        var keys = Object.keys(req.body);
        var index = keys.indexOf('_csrf');
        if (index >= 0) {
            keys.splice(index, 1);
        }
        var model = {
            body: req.body,
            keys: keys
        };

        res.render('results', model);


    });

};
