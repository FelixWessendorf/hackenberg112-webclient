(function(){

    'use strict';

    angular.module('app').controller('MonthlyServiceController',['$scope','ApiService',function($scope,apiService){

        $scope.currentlyOnDuty = [];

        apiService.monthlyService.loadCurrentlyOnDuty().then(function(currentlyOnDuty){
            $scope.currentlyOnDuty = currentlyOnDuty;
        });

        $scope.apiEndpointUrl = function(){
            return apiService.apiEndpointUrl();
        };

    }]);


})();