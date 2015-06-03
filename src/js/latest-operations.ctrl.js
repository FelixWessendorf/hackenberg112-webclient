(function(){

    'use strict';

    angular.module('app').controller('LatestOperationsController',['$scope','ApiService',function($scope,apiService){

        $scope.latestOperations = [];
        $scope.latestDate = null;

        apiService.operation.loadLatest5().then(function(latestOperations){
            $scope.latestOperations = latestOperations;
            if(latestOperations.length>0) {
              var now = new Date();
              var latestDate = new Date(latestOperations[0].date*1000);
              $scope.today = latestDate.getFullYear()==now.getFullYear()&&latestDate.getMonth()==now.getMonth()&&latestDate.getDate()==now.getDate();
              $scope.latestDate = new Date(latestDate.getFullYear(),latestDate.getMonth(),latestDate.getDate(),now.getHours(),now.getMinutes(),now.getSeconds());
            }
        });
        

    }]);


})();