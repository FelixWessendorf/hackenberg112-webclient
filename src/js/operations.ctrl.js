(function(){

    'use strict';

    angular.module('app').controller('OperationsController',['$scope','ApiService',function($scope,apiService){

        $scope.operations = [];
        $scope.years = [];

        apiService.operation.loadOperations().then(function(operations){
            $scope.operations = operations;

            _.each(operations,function(operation){
                var operationDate = new Date(operation.date*1000);
                var year = operationDate.getFullYear();
                if(!_.contains($scope.years,year)) $scope.years.push(year);
            });

        });

        $scope.operationsForYear = function(year){
            return _.filter($scope.operations,function(operation){
                var operationDate = new Date(operation.date*1000);
                var operationYear = operationDate.getFullYear();
                return operationYear==year;
            });
        };

    }]);

})();