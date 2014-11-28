'use strict';


var StoreModel = require('../../models/store');


module.exports = function (router) {

    var model = new StoreModel();

    model.welcome = "Welcome to the Store";

    router.get('/', function (req, res) {

        res.render('store/index', model);

    });

};
