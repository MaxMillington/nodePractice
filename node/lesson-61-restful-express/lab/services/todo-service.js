'use strict';

/**
 * Utility function to generate a UUID in Javascript shamelessly borrowed from
 * stackoverflow
 */
function uuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

module.exports = function module(todos) {

  return {
    findAll : function findAll(callback) {
      callback(null, todos);
    },

    findOne : function findOne(id, callback) {
      var i;
      for (i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          return callback(null, todos[i]);
        }
      }
      callback(new Error('ENOTODO'));
    },

    addTodo : function addTodo(content, callback) {
      // In a real application, you would persist here to the database
      // Instead, we are updating our in-memory data

      var todo = {
        id : uuid(),
        content : content
      };

      todos.push(todo);

      callback(null, todo);
    },

    updateTodo : function updateTodo(id, content, callback) {
      todos.forEach(function each(todo) {
        if (id === todo.id) {
          todo.content = content;
          return callback();
        }
      });

      callback(new Error('ENOTODO'));
    },

    deleteTodo : function deleteTodo(id, callback) {
      var index = 0;
      todos.forEach(function each(todo) {
        if (id === todo.id) {
          todos.splice(index, 1);
          return callback();
        }
        index++;
      });

      callback(new Error('ENOTODO'));
    }
  };
};