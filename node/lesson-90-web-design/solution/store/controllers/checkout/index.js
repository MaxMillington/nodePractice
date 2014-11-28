'use strict';


var CheckoutModel = require('../../models/checkout');


module.exports = function (router) {

    var model = new CheckoutModel();


    model.welcome = "Welcome to the checkout page.";
    router.get('/', function (req, res) {

        res.render('checkout/index', model);

    });

};
