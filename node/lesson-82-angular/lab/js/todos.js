/**
 * Created by clboyd on 1/13/15.
 */

(function () {

    var app = angular.module('todos', []);

    app.directive("todoList", function() {
       return {
           restrict: 'EA',  /* Element, Attribute, Class */
           templateUrl: 'todoList.html',
           controller: function() {
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

           },
           controllerAs: 'todoCntlr'
       };
    });

})();

