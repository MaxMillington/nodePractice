'use strict';

module.exports = function router(app) {

    //var controller = require('./controller')(app);

    //app.get('/', controller.display);


    // the following gets the result of the POSTed form and displays the result
    app.post('/submitAssessment', function (req, res, next) {
        res.render('templates/results', {body: req.body});
    });


};