(function(){

    'use strict';

    var persons = null;
    var statistics = null;

    angular.module('app').controller('PersonnelController',['$scope','ApiService',function($scope,apiService){

        $scope.persons = persons===null ? [] : persons;
        $scope.statistics = statistics===null ? [] : statistics;

        if(persons===null){
            apiService.person.listAll().then(function(thePersons){
                $scope.persons = persons = thePersons;
            });
        }
        
        if(statistics===null){
            apiService.person.getStatistics().then(function(theStatistics){
                $scope.statistics = statistics = theStatistics;
            });
        }

    }]);


})();