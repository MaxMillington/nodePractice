'use strict';


var EchoModel = require('../../models/echo');


module.exports = function (router) {

    var model = new EchoModel();


    function handle(req, res) {
        model.message = req.param('message') || model.message;
        res.render('echo', model);
    }

    router.get('/', handle);
    router.post('/', handle);


};
