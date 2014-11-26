'use strict';


var IndexModel = require('../models/index');

var Product = require('../models/productModel');

module.exports = function (router) {

	var model = new IndexModel();

    router.get('/setLanguage/:locale', function (req, res) {
		res.cookie('locale', req.params.locale);
		res.redirect('/');
	});

	router.get('/', function (req, res) {
		Product.find(function(err, prods) {
			if (err) {
				console.log(err);
			}
			prods.forEach(function(prod) {
				prod.prettyPrice = prod.prettyPrice();
			});
			var model = {
				products : prods
			};
			res.render('index', model);
		});
	});

};
