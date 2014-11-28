'use strict';


var CartModel = require('../../models/cart');


module.exports = function (router) {

    var model = new CartModel();

    model.welcome = "Welcome to the Shopping Cart.";

    router.get('/', function (req, res) {

        res.render('cart/index', model);

    });

};
