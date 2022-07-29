(function(){

    'use strict';

    angular.module('app').controller('SchluckspechtController',['$scope','ApiService',function($scope, apiService){
        $scope.message = '';
        $scope.team = '';
        var participants = angular.element(document.querySelector('#participants'));
        $scope.FormSubmit = function () {
            $scope.error = [];
            var participantArray = [];
            angular.forEach(participants.children(), function (input) {
                if (input.value.trim().length > 0) {
                    participantArray.push(input.value);
                    input.classList.remove('error');
                } else {
                    input.classList.add('error');
                }
            });
            var teamnameInput = document.querySelector('#teamname');
            if ($scope.team.length < 3 ) {
                $scope.error.push('Ihr Teamname sollte mindestens 3 Zeichen lang sein');
                teamnameInput.classList.add('error');
            } else {
                teamnameInput.classList.remove('error');
            }
            if (participantArray.length < 4) {
                $scope.error.push('Bitte geben Sie mindestens 4 Teilnehmer an');
            }

            if ($scope.error.length === 0) {
                apiService.team.create($scope.team, participantArray)
                    .then(function() {
                        $scope.message = 'Registrierung für Team '+ $scope.team +' erfolgreich, guten Durst!';
                        $scope.registration = false;
                        var inputCount = 0;
                        angular.forEach(participants.children(), function (input) {
                            if (inputCount < 4) {
                                input.value = '';
                            } else {
                                input.remove();
                            }
                            inputCount++;
                        });
                        teamnameInput.value = '';
                    })
                    .catch(function(error) {
                        $scope.error.push(error[0]['message']);
                    });
            }
        }
        $scope.count = 5;
        $scope.addInput = function () {
            if ($scope.count <= 9) {
                participants.append('<input type="text" class="form-control">');
                $scope.count = $scope.count+1;
            } else {
                $scope.error.push('Es sind nur 9 Teilnehmer pro Team erlaubt');
            }
        }
        $scope.removeInput = function () {
            if ($scope.count > 4) {
                $scope.count = $scope.count-1;
                participants.children().eq($scope.count-1).remove();
            }
        }
    }]);


})();
