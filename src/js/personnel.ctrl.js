(function(){

    'use strict';

    var persons = null;

    angular.module('app').controller('PersonnelController',['$scope','ApiService',function($scope,apiService){

        $scope.persons = persons===null ? [] : persons;

        if(persons===null){
            apiService.person.listAll().then(function(thePersons){
                $scope.persons = persons = thePersons;
            });
        }

    }]);


})();