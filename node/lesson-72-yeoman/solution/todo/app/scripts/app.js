'use strict';

angular
  .module('todoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/square', {
        templateUrl: 'views/square.html',
        controller: 'SquareCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
