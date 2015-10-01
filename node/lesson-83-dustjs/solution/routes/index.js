'use strict';

module.exports = function module(app) {

    var controller = require('./controller')(app);

    app.get('/', controller.display);

    app.post('/submitAssessment', function (req, res, next) {
        var model = {
            body: req.body,
            keys: Object.keys(req.body)
        };
        res.render('templates/results', model);
    });

};