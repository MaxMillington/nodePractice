'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    function handle(req, res) {
        model.message = req.param('message') || model.message;
        res.render('index', model);
    }

     router.get('/', handle);


};
