'use strict';


module.exports = function module(app) {

// To-do: Require quiz.js under the model folder and assign it to var model.


  return {

    display : function display(req, res, next) {
        
        res.render('templates/quiz', model);  //quiz.dust is under views/templates folder. using dust, Adaro enables dust
                                             //templating action and rendering
    }

  }
}