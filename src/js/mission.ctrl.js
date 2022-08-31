(function(){

    'use strict';

    angular.module('app').controller('MissionController',['$scope','ApiService',function($scope, apiService){
        $scope.password = '';
        $scope.date = '';
        $scope.action = '';
        $scope.actionOthers = '';
        $scope.others = false;
        $scope.success = false;
        $scope.FormSubmit = function () {
            if($scope.date === null || $scope.date.length === 0) {
                $scope.errorDate = true;
            }
            if($scope.action === null || $scope.action.trim().length === 0) {
                $scope.errorAction = true;
            }
            if ($scope.action === 'others') {
                $scope.errorAction = $scope.actionOthers.trim().length === 0;
            }
            if($scope.password === null || $scope.password.trim().length === 0) {
                $scope.errorPassword = 'Bitte Passwort angeben';
            }
            if (!$scope.errorAction && !$scope.errorDate && !$scope.errorPassword) {
                let action = $scope.action.trim();
                if ($scope.action === 'others') {
                    action = $scope.actionOthers.trim();
                }

                apiService.operation.newMission($scope.date, action, $scope.password)
                    .then(function() {
                        $scope.success = true;
                    })
                    .catch(function(error) {
                        if (error[0].source === 'password') {
                            $scope.errorPassword = 'Passwort falsch';
                        } else {
                            console.log(error);
                        }
                    });
            }
        }

        // Eingabefeld für neuen Einsatz anzeigen
        $scope.change = function () {
            $scope.others = $scope.action === 'others';
            $scope.errorAction = false;
        }

        // Laden der vorhandenen Einsätze als Vorschläge
        $scope.operationsDescription = [];
        apiService.operation.loadOperations().then(function(operations){
            _.each(operations,function(operation){
                if (!$scope.operationsDescription.includes(operation.description.trim())){
                    $scope.operationsDescription.push(operation.description.trim());
                }
            });
            $scope.operationsDescription.sort()
        });
    }]);
})();
