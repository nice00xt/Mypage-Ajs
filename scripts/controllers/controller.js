'use strict';

/**
 * @ngdoc function
 * @name apps.controller:controller
 * @description
 * # controller
 * Controller of the apps
 */


  
var AppStart = angular.module('apps', ['ngRoute', 'ngAnimate'])

AppStart.config(['$routeProvider', function($routeProvider) {
                $routeProvider.
                when('/portfolio', {
                    templateUrl: 'views/portfolio.html',
                    controller: 'PortfolioController'

                  }).
                  when('/skills', {
                      templateUrl: 'views/skills.html',
                      controller: 'skillList'

                    }).
                  when('/portfolio/:details', {
                    templateUrl: 'views/port-view.html',
                    controller: 'PortfolioDetails'

                  }).
                  otherwise({
                    redirectTo: '/',
                      templateUrl: 'views/start.html',
                  });
              }]);

//animate views ===================================================
        AppStart.controller('PortfolioController', function($scope) {
            $scope.pageClass = 'page-porfolio';
        });

        AppStart.controller('skillList', function($scope) {
            $scope.pageClass = 'page-skills';
        });


//skills json file
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

//portolio json file
        AppStart.controller('PortfolioController', function ($scope, $http){
              $http.get('data/portfolio.json').success(function(data) {
                $scope.portlist = data; 
              });
            });

//route
        AppStart.controller('PortfolioDetails', function ($scope, $routeParams, $http){
        $scope.id = $routeParams.details;


       $http.get('data/portfolio.json').success(function(data) {

       $scope.prt = data.filter(function(entry){
            return entry.id === $scope.id;
          })[0];
        });
      }); 


       
           
