/**
 * Created by clboyd on 1/13/15.
 */

(function () {

    var app = angular.module('todos', []);

    app.controller('TodoController', function () {
        this.todos = [];
        this.todo = {
            content: "Walk the dog."
        };
        this.addTodo = function() {
            if (this.todo.content.length > 0) {
                /* if the todo is not empty */
                this.todos.push(this.todo);
            }
            this.todo = {};
        };
    });

    app.directive("todoList", function() {
       return {
           restrict: 'EA',  /* Element, Attribute, Class */
           templateUrl: 'todoArray.html'
       };
    });

})();

