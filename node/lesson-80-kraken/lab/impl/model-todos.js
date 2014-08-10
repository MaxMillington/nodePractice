'use strict';

var mongoose = require('mongoose');

var todoModel = function() {
  var todoSchema = mongoose.Schema({
    content: String
  });
  
  return mongoose.model('Todo', todoSchema);
};

module.exports = new todoModel();

