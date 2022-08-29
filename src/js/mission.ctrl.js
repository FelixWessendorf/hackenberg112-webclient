(function(){

    'use strict';

    angular.module('app').controller('MissionController',['$scope','ApiService',function($scope, apiService){
        $scope.date = '';
        $scope.action = '';
        $scope.actionOthers = '';
        $scope.others = false;
        $scope.FormSubmit = function () {
            $scope.error = [];
            if($scope.date === null || $scope.date.length === 0) {
                $scope.errorDate = true;
            }
            if($scope.action === null || $scope.action.trim().length === 0) {
                $scope.errorAction = true;
            }
            if ($scope.action === 'others') {
                $scope.errorAction = $scope.actionOthers.trim().length === 0;
            }
            if (!$scope.errorAction && !$scope.errorDate) {
                console.log($scope.date);
                console.log($scope.action);
                console.log($scope.actionOthers);
            }
        }

        $scope.change = function () {
            $scope.others = $scope.action === 'others';
            $scope.errorAction = false;
        }

        $scope.operationsDescription = [];
        apiService.operation.loadOperations().then(function(operations){
            $scope.operations = operations;

            _.each(operations,function(operation){
                if (!$scope.operationsDescription.includes(operation.description.trim())){
                    $scope.operationsDescription.push(operation.description.trim());
                }
            });
            $scope.operationsDescription.sort()
        });
    }]);
})();
