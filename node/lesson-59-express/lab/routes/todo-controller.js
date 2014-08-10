'use strict';

module.exports = function module(app) {

  var service = require('../services/todo-service.js')(app.locals.todos);

  return {

    findAll : function findAll(req, res, next) {
      // TODO: delegate to service then render view with model in callback
      // function
    },

    addTodo : function addTodo(req, res, next) {
      // TODO: delegate to service then render view with model in callback
      // function
    },

    editTodo : function editTodo(req, res, next) {
      // TODO: delegate to service then render view with model in callback
      // function
    },

    updateTodo : function updateTodo(req, res, next) {
      // TODO: delegate to service then render view with model in callback
      // function
    },

    deleteTodo : function deleteTodo(req, res, next) {
      // TODO: delegate to service then render view with model in callback
      // function
    }

  };
};