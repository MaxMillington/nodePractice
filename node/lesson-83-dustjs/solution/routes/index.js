'use strict';

module.exports = function module(app) {

  var controller = require('./controller')(app);

  app.get('/', controller.display);
  
};