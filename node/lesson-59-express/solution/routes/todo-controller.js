'use strict';

module.exports = function module(app) {

  var service = require('../services/todo-service.js')(app.locals.todos);

  return {

    findAll : function findAll(req, res, next) {
      service.findAll(function onFound(err, todos) {
        if (!err) {
          return res.render('index', {
            todos : todos
          });
        }
        res.send(500);
      });
    },

    addTodo : function addTodo(req, res, next) {
      service.addTodo(req.body.content, function onAdded(err, todo) {
        if (!err) {
          return res.redirect('/');
        }
        res.send(500);
      });

    },

    editTodo : function editTodo(req, res, next) {
      service.findAll(function onFound(err, todos) {
        if (!err) {
          return res.render('edit', {
            todos : todos,
            current : req.params.id
          });
        }
        res.send(500);
      });
    },

    updateTodo : function updateTodo(req, res, next) {
      service.updateTodo(req.params.id, req.body.content, function onUpdated(err) {
        if (!err) {
          return res.redirect('/');
        }
        res.send(500);
      });
    },

    deleteTodo : function deleteTodo(req, res, next) {
      service.deleteTodo(req.params.id, function onDeleted(err) {
        if (!err) {
          return res.redirect('/');
        }
        res.send(500);
      });
    }

  };
};