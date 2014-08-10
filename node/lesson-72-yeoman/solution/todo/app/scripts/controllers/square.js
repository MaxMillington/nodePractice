'use strict';

angular.module('todoApp')
  .controller('SquareCtrl', function ($scope) {
    $scope.squares = [];
    var vals = [1, 2, 3, 4, 5, 6];
    vals.forEach(function onEach(it) {
      $scope.squares.push({
        val: it,
        squared: it * it
      });
    });
  });
