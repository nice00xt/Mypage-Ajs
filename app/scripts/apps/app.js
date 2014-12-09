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