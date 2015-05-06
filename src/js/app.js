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
                when('/termine', {
                    templateUrl: 'templates/termine.html'
                }).
                when('/einsaetze', {
                    templateUrl: 'templates/einsaetze.html'
                }).
                when('/personal', {
                    templateUrl: 'templates/personal.html'
                }).
                when('/ausruestung', {
                    templateUrl: 'templates/ausruestung.html'
                }).
                when('/mitmachen', {
                    templateUrl: 'templates/mitmachen.html'
                }).
                when('/chronik', {
                    templateUrl: 'templates/chronik.html'
                }).
                when('/chronik/geschichte-der-feuerwehr-hackenberg-leienbach', {
                    templateUrl: 'templates/chronik/geschichte-der-feuerwehr-hackenberg-leienbach.html'
                }).
                when('/chronik/liste-bisheriger-zugfuehrer', {
                    templateUrl: 'templates/chronik/liste-bisheriger-zugfuehrer.html'
                }).
                when('/impressum', {
                    templateUrl: 'templates/impressum.html'
                }).
                otherwise({
                    redirectTo: '/'
                });


        }]);

})();