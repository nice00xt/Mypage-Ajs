var AppStart = angular.module('apps', [ngRoute])

AppStart.config( [ 'routeProvider', function($routeProvider){

  	$routeProvider.when('skills', {
  		templateUrl: 'views/skills.html'
  	}).otherwise({
  		redirectTo:'/',
  		templateUrl: 'views/start.html'
  	})


} ] )