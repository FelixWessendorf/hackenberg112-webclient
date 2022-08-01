(function () {
    'use strict';

    $(function(){
        $('body')
            .on('click','a',function(event){ $(event.currentTarget).blur();})
            .on('click','*:button',function(event){ $(event.currentTarget).blur();});
    });

    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });

    var app = angular.module('app', ['ngRoute','angularMoment','ui.bootstrap']);

    app.config(

        ['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

            $locationProvider.html5Mode(true);

            $routeProvider.
                when('/', {
                    templateUrl: 'templates/startseite.html',
                    controller: 'HomePageController'
                }).
                when('/termine', {
                    templateUrl: 'templates/termine.html',
                    controller: 'AppointmentsController'
                }).
                when('/einsaetze', {
                    templateUrl: 'templates/einsaetze.html',
                    controller: 'OperationsController'
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
                    templateUrl: 'templates/chronik.html',
                    controller: 'ChronicleController'
                }).
                when('/chronik/geschichte-der-feuerwehr-hackenberg-leienbach', {
                    templateUrl: 'templates/chronik/geschichte-der-feuerwehr-hackenberg-leienbach.html'
                }).
                when('/chronik/liste-bisheriger-zugfuehrer', {
                    templateUrl: 'templates/chronik/liste-bisheriger-zugfuehrer.html',
                    controller: 'ListOfChiefsController'
                }).
                when('/tag-der-offenen-tuer-2014', {
                    templateUrl: 'templates/tag-der-offenen-tuer-2014.html',
                    controller: 'OpenDoorDay2014Controller'
                }).
                when('/schluckspecht', {
                    templateUrl: 'templates/schluckspecht-2022.html',
                    controller: 'SchluckspechtController'
                }).
            when('/schluckspecht-bestellungen', {
                templateUrl: 'templates/schluckspecht-bestellungen.html',
                controller: 'SchluckspechtBestellungenController'
            }).
                when('/impressum', {
                    templateUrl: 'templates/impressum.html'
                }).
                otherwise({
                    redirectTo: '/'
                });


        }]);

})();
