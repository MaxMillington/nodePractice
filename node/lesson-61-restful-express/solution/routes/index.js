'use strict';

module.exports = function module(app) {

  var todoController = require('./todo-controller')(app);

  app.get('/', todoController.findAll);
  app.post('/create', todoController.addTodo);
  app.get('/delete/:id', todoController.deleteTodo);
  app.get('/edit/:id', todoController.editTodo);
  app.post('/update/:id', todoController.updateTodo);

  // REST API routes
  app.get('/api/todos', todoController.findAllJson);
  app.get('/api/todos/:id', todoController.findOneJson);
  app.post('/api/todos', todoController.addTodoJson);
  app.delete('/api/todos/:id', todoController.deleteTodoJson);
  app.put('/api/todos/:id', todoController.updateTodoJson);
};