'use strict';


var CspModel = require('../../models/csp');


module.exports = function (router) {

    var model = new CspModel();
    //var hdr = {'Content-Security-Policy': "default-src 'self'"};

    router.get('/', function (req, res) {
        //res.setHeader('Content-Security-Policy', "default-src 'self'");
        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('csp/index', model);
            }
        });
    });

};
