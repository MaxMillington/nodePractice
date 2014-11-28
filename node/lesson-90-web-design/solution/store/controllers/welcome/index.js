'use strict';


var WelcomeModel = require('../../models/welcome');


module.exports = function (router) {

    var model = new WelcomeModel();

    model.welcome = "Welcome to the welcome page.";

    router.get('/', function (req, res) {

        res.render('welcome/index', model);

    });

};
