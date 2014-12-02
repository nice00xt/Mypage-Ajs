'use strict';

/**
 * @ngdoc function
 * @name apps.controller:controller
 * @description
 * # controller
 * Controller of the apps
 */

  var AppStart = angular.module('apps', [])
    
    AppStart.controller( 'skillList1', ['$scope', function($scope){

       $scope.skills = [
            { skill: "Html5", perct: "5" },
            { skill: "Css3", perct: "10" },
            { skill: "Jquery", perct: "20" },
            { skill: "Jquery UI", perct: "40" },
            { skill: "Angular JS", perct: "50" },
            { skill: "User Experience", perct: "20" },
            { skill: "Responsive Design", perct: "30" }


        ]

        $scope.skills2 = [
            { skill: "Bootstrap 3", perct: "50" },
            { skill: "Less", perct: "60" },
            { skill: "Wordpress", perct: "15" },
            { skill: "SEO", perct: "40" }

        ]

        $scope.skills3 = [
            { skill: "Bower", perct: "30" },
            { skill: "GruntJS", perct: "50" },
            { skill: "Yeoman", perct: "50" },
            { skill: "GitHub", perct: "50" }


        ] 

    }] )

        AppStart.controller( 'portfolio', ['$scope', function($scope){

       $scope.portlist = [
            { title: "project", img: "work1.jpg", descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam earu" },
            { title: "project", img: "work2.jpg", descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam earu" },
            { title: "project", img: "work3.jpg", descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam earu" },
            { title: "project", img: "work4.jpg", descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam earu" },
            { title: "project", img: "work5.jpg", descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam earu" },
            { title: "project", img: "work6.jpg", descrip: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam earu" },

        ]

    }] )