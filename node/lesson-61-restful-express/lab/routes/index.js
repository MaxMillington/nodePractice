'use strict';

module.exports = function module(app) {

  var todoController = require('./todo-controller')(app);

  app.get('/', todoController.findAll);
  app.post('/create', todoController.addTodo);
  app.get('/delete/:id', todoController.deleteTodo);
  app.get('/edit/:id', todoController.editTodo);
  app.post('/update/:id', todoController.updateTodo);

  // TODO
  // REST API routes
};