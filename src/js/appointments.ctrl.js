(function(){

    'use strict';

    angular.module('app').controller('AppointmentsController',['$scope','ApiService',function($scope,apiService){

        $scope.apiEndpointUrl = function(){
            return apiService.apiEndpointUrl();
        };

    }]);


})();