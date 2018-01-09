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
      callback(null, todos)
    },

    addTodo : function addTodo(content, callback) {
      var todo = {
        id : uuid(),
        content : content
      };

      todos.push(todo)

      callback(null, todo)
    },

    updateTodo : function updateTodo(id, content, callback) {
      var todo = todos.find(function(todo) { return todo.id === id })

      if (todo) {
        todo.content = content
        return callback()
      } else {
        callback(new Error('todo with id ' + id + ' not found.'));
      }
    },

    deleteTodo : function deleteTodo(id, callback) {
      var index = todos.findIndex(function(element) { return element.id === id })

      if (index > -1) {
        todos.splice(index, 1);
        return callback();
      } else {
        callback(new Error('todo with id ' + id + ' not found.'));
      }
    }
  };
};