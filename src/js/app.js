(function () {
    'use strict';

    $(function(){
        $('body')
            .on('click','a',function(event){ $(event.currentTarget).blur()})
            .on('click','*:button',function(event){ $(event.currentTarget).blur()})
    });

    var app = angular.module('app', ['ngRoute','angularMoment']);

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
                    templateUrl: 'templates/personal.html',
                    controller: 'PersonnelController'
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