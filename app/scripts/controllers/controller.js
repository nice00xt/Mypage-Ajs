'use strict';

/**
 * @ngdoc function
 * @name apps.controller:controller
 * @description
 * # controller
 * Controller of the apps
 */


  
var AppStart = angular.module('apps', ['ngRoute'])

AppStart.config(['$routeProvider', function($routeProvider) {
                $routeProvider.
                when('/portfolio', {
                    templateUrl: 'views/portfolio.html',
                    controller: 'PortfolioController'

                  }).
                  when('/skills', {
                      templateUrl: 'views/skills.html',

                    }).
                  when('/:details', {
                    templateUrl: 'views/port-view.html',
                    controller: 'PortfolioDetails'

                  }).
                  otherwise({
                    redirectTo: '/',
                      templateUrl: 'views/start.html',
                  });
              }]);


        AppStart.controller('skillList', function ($scope, $http){
              $http.get('data/skill.json').success(function(data) {
                $scope.skills = data; 
              });
              $http.get('data/skill2.json').success(function(data) {
                $scope.skills2 = data; 
              });
              $http.get('data/skill3.json').success(function(data) {
                $scope.skills3 = data; 
              });
            });


        AppStart.controller('PortfolioController', function ($scope, $http){
              $http.get('data/portfolio.json').success(function(data) {
                $scope.portlist = data; 
              });
            });
        
        AppStart.controller('PortfolioDetails', function ($scope, $routeParams, $http){
        $scope.title = $routeParams.details;

       $http.get('data/portfolio.json').success(function(data) {
          $scope.prt = data.filter(function(entry){
            return entry.title === $scope.title;
          })[0];
        });

      });
             
/*
      AppStart.controller('PortfolioDetails', function ($scope, $routeParams){
        $scope.title = $routeParams.details;


      });
    */
      

       
           
