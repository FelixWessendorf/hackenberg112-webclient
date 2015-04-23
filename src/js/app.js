(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.config(

        ['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

            $locationProvider.html5Mode(true);

            $routeProvider.
                when('/', {
                    templateUrl: 'templates/startseite.html'
                }).
                when('/impressum', {
                    templateUrl: 'templates/impressum.html'
                }).
                otherwise({
                    redirectTo: '/'
                });


        }]);

})();