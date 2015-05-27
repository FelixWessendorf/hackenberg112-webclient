(function(){

    'use strict';

    angular.module('app').controller('LatestOperationsController',['$scope','ApiService',function($scope,apiService){

        $scope.latestOperations = [];

        apiService.operation.loadLatest5().then(function(latestOperations){
            $scope.latestOperations = latestOperations;
        });

    }]);


})();