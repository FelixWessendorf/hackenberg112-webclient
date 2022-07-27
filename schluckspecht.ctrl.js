(function(){

    'use strict';

    angular.module('app').controller('SchluckspechtController',['$scope','$uibModal',function($scope,$uibModal){
        $scope.message = '';
        $scope.team = '';
        var participants = angular.element(document.querySelector('#participants'));
        $scope.FormSubmit = function () {
            $scope.error = [];
            var participantArray = [];
            angular.forEach(participants.children(), function (input) {
                if (input.value.trim().length > 0) {
                    participantArray.push(input.value);
                }
            });

            if ($scope.team.length < 3 ) {
                $scope.error.push('Ihr Teamname sollte mindestens 3 Zeichen lang sein');
            }
                console.log(participantArray)
            if (participantArray.length < 4) {
                $scope.error.push('Bitte geben Sie mindestens 4 Teilnehmer an');
            }

            if ($scope.error.length === 0) {
                $scope.message = 'Registrierung für Team '+ $scope.team +' erfolgreich, guten Durst!';
                $scope.registration = false;
            }
        }
        $scope.count = 5;
        $scope.addInput = function (e) {
            if ($scope.count <= 9) {
                participants.append('<input type="text" name="teilnehmer'+$scope.count+'" class="form-control" ng-model="participant'+$scope.count+'">');
                $scope.count = $scope.count+1;
            } else {
                $scope.error.push('Es sind nur 9 Teilnehmer pro Team erlaubt');
            }
        }
    }]);


})();