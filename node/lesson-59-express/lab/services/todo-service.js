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
      // TODO
    },

    addTodo : function addTodo(content, callback) {
      // TODO
    },

    updateTodo : function updateTodo(id, content, callback) {
      // TODO
    },

    deleteTodo : function deleteTodo(id, callback) {
      // TODO
    }
  };
};