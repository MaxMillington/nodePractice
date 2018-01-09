'use strict';

module.exports = function module(app) {

  var service = require('../services/todo-service.js')(app.locals.todos);

  return {

    findAll : function findAll(req, res, next) {
      service.findAll(function onFound(err, todos) {
        return res.render('index', {
          todos: todos
        })
      })
    },

    addTodo : function addTodo(req, res, next) {
      service.addTodo(function onAdded(err, todo) {
        return res.redirect('/')
      })
    },

    editTodo : function editTodo(req, res, next) {
      service.findAll(function onFound(err, todos) {
        return res.render('edit', {
          todos: todos,
          current: req.params.id
        })
      })
    },

    updateTodo : function updateTodo(req, res, next) {
      service.updateTodo(req.params.id, req.body.content, function onUpdated(err) {
        return res.redirect('/')
      })
    },

    deleteTodo : function deleteTodo(req, res, next) {
      service.deleteTodo(req.params.id, function onDeleted(err) {
        return res.redirect('/');
      })
    }
  };
};