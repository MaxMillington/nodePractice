'use strict';


var ProductsModel = require('../../models/products');
var Product = require('../../models/productModel');


module.exports = function (router) {

    router.get('/', function (req, res) {
        Product.find(function (err, prods) {
            console.log('products/index.js get /')
            if (err) {
                console.log(err);
            }
            prods.forEach(function(prod) {
                prod.prettyPrice = prod.prettyPrice();
            });
            var model = {
                products: prods
            };
            res.render('products', model);
        });
    });

    router.post('/', function(req, res) {
    // Retrieve data
        var name = req.body.name && req.body.name.trim();
        var price = parseFloat(req.body.price, 10);
    // Some very lightweight input checking
        if (name === '' || isNaN(price)) {
            res.redirect('/products#BadInput');
            return;
        }

    // Create a new instance of a Product
        var newProduct = new Product({name : name, price : price});
    // Show it in console for educational purposes…
        newProduct.whatAmI();
    // Save it to the database.
        newProduct.save(function(err) {
            if (err) {
                console.log('save error', err);
            }
            res.redirect('/products');
        });
    });

    router.delete('/', function (req, res) {
        Product.remove({_id: req.body.item_id}, function (err) {
            if (err) {
                console.log('Remove error: ', err);
            }
            res.redirect('/products');
        });
    });



};