'use strict';

/**
 * @ngdoc function
 * @name apps.controller:controller
 * @description
 * # controller
 * Controller of the apps
 */

var portapp = angular.module( 'apps' , ['ngRoute'] )
          
portapp.config(['$routeProvider',
   function($routeProvider) {
        $routeProvider.
           when('/skills', {
             templateUrl: 'views/skills.html',
           }).
           when('/portfolio', {
              templateUrl: 'views/portfolio.html',
            }).
            otherwise({
              redirectTo: '/',
              templateUrl: 'views/start.html',
         });
    }]);