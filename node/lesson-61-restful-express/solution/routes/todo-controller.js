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

    findAllJson : function findAllJson(req, res, next) {
      service.findAll(function onFoundJson(err, todos) {
        if (!err) {
          return res.json(todos);
        }
        res.json({
          message : err.message
        });
      });
    },

    findOneJson : function findOneJson(req, res, next) {
      service.findOne(req.params.id, function onFoundOneJson(err, todo) {
        if (!err) {
          return res.json(todo);
        }
        res.json({
          message : err.message
        });
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

    addTodoJson : function addTodo(req, res, next) {
      service.addTodo(req.body.content, function onAddedJson(err, todo) {
        if (!err) {
          return res.json(todo);
        }
        res.json({
          message : err.message
        });
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

    updateTodoJson : function updateTodo(req, res, next) {
      service.updateTodo(req.params.id, req.body.content, function onUpdatedJson(err) {
        if (!err) {
          return res.json({
            id : req.params.id
          });
        }
        res.json({
          message : err.message
        });
      });
    },

    deleteTodo : function deleteTodo(req, res, next) {
      service.deleteTodo(req.params.id, function onDeleted(err) {
        if (!err) {
          return res.redirect('/');
        }
        res.send(500);
      });
    },

    deleteTodoJson : function deleteTodo(req, res, next) {
      service.deleteTodo(req.params.id, function onDeletedJson(err) {
        if (!err) {
          return res.json({
            id : req.params.id
          });
        }
        res.json({
          message : err.message
        });
      });
    }

  };
};