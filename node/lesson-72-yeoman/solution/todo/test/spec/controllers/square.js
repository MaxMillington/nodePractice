'use strict';

describe('Controller: SquareCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var SquareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SquareCtrl = $controller('SquareCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of squares of the form { val: n, squared: n*n } where n is from 1 to 6 to the scope', function () {
    expect(scope.squares.length).toBe(6);

    [1, 2, 3, 4, 5, 6].forEach(function (elem) {
      var obj = scope.squares[elem - 1];
      expect(obj).toEqual({
        val : elem,
        squared : elem * elem
      });
    });
  });
});
