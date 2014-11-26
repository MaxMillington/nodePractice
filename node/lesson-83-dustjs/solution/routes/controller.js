'use strict';


module.exports = function module(app) {

var model = require('../model/quiz')
  return {

    display : function display(req, res, next) {
        
        res.render('templates/quiz', model);  //quiz.dust is under views/templates folder. using dust, Adaro enables dust
                                             //templating action and rendering
    }

  }
}