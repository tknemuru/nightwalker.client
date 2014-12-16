'use strict';

/**
 * @ngdoc overview
 * @name ngappApp
 * @description
 * # ngappApp
 *
 * Main module of the application.
 */
angular
  .module('NightWalker', [
    'NightWalker.Services',
    'NightWalker.Filters',
    'NightWalker.Controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('NightWalker.Services', []);
angular.module('NightWalker.Filters', []);
angular.module('NightWalker.Controllers', ['NightWalker.Services', 'NightWalker.Filters']);