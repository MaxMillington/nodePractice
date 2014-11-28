'use strict';


var CartModel = require('../../models/cart');


module.exports = function (router) {

    var model = new CartModel();


    router.get('/', function (req, res) {
        
        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('cart/index', model);
            }
        });
    });

};
