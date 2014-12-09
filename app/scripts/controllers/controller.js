'use strict';

/**
 * @ngdoc function
 * @name apps.controller:controller
 * @description
 * # controller
 * Controller of the apps
 */


  
  var AppStart = angular.module('apps', ['ngRoute'])
    
    AppStart.controller( 'skillList1', ['$scope', function($scope){

       $scope.skills = [
            { skill: "Html5", perct: "5" },
            { skill: "Css3", perct: "10" },
            { skill: "Jquery", perct: "20" },
            { skill: "Jquery UI", perct: "40" },
            { skill: "Angular JS", perct: "50" },
            { skill: "Sql", perct: "40" },
            { skill: "php", perct: "40" },
            { skill: "Responsive Design", perct: "30" }


        ]

        $scope.skills2 = [
            { skill: "Bootstrap 3", perct: "30" },
            { skill: "Wordpress", perct: "15" },
            { skill: "SEO", perct: "40" },
            { skill: "User Experience", perct: "20" }

        ]

        $scope.skills3 = [
            { skill: "Less", perct: "30" },
            { skill: "Bower", perct: "40" },
            { skill: "GruntJS", perct: "50" },
            { skill: "GitHub", perct: "50" }


        ] 

    }] )

         AppStart.controller('PortfolioController', function ($scope, $http){
              $http.get('data/portfolio.json').success(function(data) {
                $scope.portlist = data; 
              });
            });


         AppStart.config(['$routeProvider', function($routeProvider) {
                $routeProvider.
                when('/portfolio', {
                    templateUrl: 'views/portfolio.html',
                    controller: 'PortfolioController'

                  }).
                  when('/skills', {
                      templateUrl: 'views/skills.html',

                    }).
                  when('/:id', {
                    templateUrl: 'views/port-view.html',
                    controller: 'PortfolioController'

                  }).
                  otherwise({
                    redirectTo: '/',
                      templateUrl: 'views/start.html',
                  });
              }]);

              
            

