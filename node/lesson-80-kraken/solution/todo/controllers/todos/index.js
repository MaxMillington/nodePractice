'use strict';

var Todo = require('../../models/todos');

module.exports = function(router) {
  // Transform Document into plain object
  function modelTransform(o) {
    var newobj = o.toObject();
    // We just use this as a string
    newobj.id = o._id.toString();
    return newobj;
  }

  // Get all todos
  router.get('/', function (req, res) {
    Todo.find(function(err, todos) {
      if (err) {
        console.log(err);
      }
      var todos =  todos.map(modelTransform);
      var model = { todos: todos };
      res.render('todos', model);
    });
  });

  // Create a todo
  router.post('/', function(req, res) {
    var content = req.body.content && req.body.content.trim();
    var newTodo = new Todo({content: content});

    newTodo.save(function(err) {
      if (err) {
        console.log('save error', err);
      }

      res.redirect('/todos');
    });
  });

  // Delete a todo
  router.get('/delete/:id', function(req, res) {
    Todo.remove({_id: req.params.id}, function(err) {
      if (err) {
        console.log('Delete error: ', err);
      }
      res.redirect('/todos');
    });
  });

  // Get a todo by id
  router.get('/:id', function(req, res) {
    Todo.findOne({_id: req.params.id}, function(err, todo) {
      if (err) {
        console.log('Error getting by id: ', err);
      }

      var todo = modelTransform(todo);
      var model = { update_todo: todo };
      res.render('todos', model);
    });
  });

  // Update a todo by id
  router.post('/:id', function(req, res) {
    Todo.findByIdAndUpdate(req.params.id, { $set: { content: req.body.content }}, function(err) {
      if (err) {
        console.log('Update error: ', err);
      }

      res.redirect('/todos');
    });
  });
};
