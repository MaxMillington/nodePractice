'use strict';

var CspModel = require('../models/csp');


module.exports = function (router) {

    var model = new CspModel();

    router.get('/', function (req, res) {
        
        
        res.render('csp', model);
        
        
    });

};
