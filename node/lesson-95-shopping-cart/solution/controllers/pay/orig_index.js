'use strict';


var PayModel = require('../../models/pay');


module.exports = function (router) {

    var model = new PayModel();


    router.get('/', function (req, res) {
        
        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('pay/index', model);
            }
        });
    });

};
