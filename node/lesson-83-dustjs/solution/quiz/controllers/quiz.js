'use strict';

var QuizModel = require('../models/quiz');


module.exports = function (router) {

    var model = new QuizModel();

    router.get('/', function (req, res) {
        
        
        res.render('quiz', model);
        
        
    });

};
