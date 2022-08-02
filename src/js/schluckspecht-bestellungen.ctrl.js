(function(){

    'use strict';

    angular.module('app').controller('SchluckspechtBestellungenController',['$scope','ApiService',function($scope, apiService){

        $scope.passwordEntrie = '';
        $scope.count = 0;
        $scope.success = false;
        $scope.passwordSuccess = false;

        $scope.passwordcheck = function (entry){
            if (entry === 'test') {
                $scope.passwordSuccess = true;
            } else {
                $scope.passwordSuccess = false;
            }
        };

        apiService.team.listAll()
            .then(function(response) {
                $scope.teams = response
            })
            .catch(function(error) {
                console.log(error);
            });

        $scope.book = function (id, amount) {
            $scope.teams.map(function (team) {
                if (team.id === id) {
                    $scope.teamname = team.name;
                }
            })

            if (amount > 0) {
                apiService.team.book(id, amount)
                    .then(function() {
                        $scope.booking = true;
                        $scope.message = true;
                        $scope.successmessage = amount + ' Getränke auf Team ' + $scope.teamname + ' gebucht';
                        $scope.lastid = id;
                        $scope.lastamount = amount;
                        $scope.count = 0;
                    })
                    .catch(function(error) {
                        $scope.successmessage = error[0].message;
                        $scope.message = true;
                    });
            } else {
                $scope.message = true;
                $scope.successmessage = 'Bitte geben Sie eine Anzahl Getränke ein';
                $scope.booking = false;
                $scope.count = 0;
            }
        }

        $scope.resetBooking = function() {
            var deleteAmount = $scope.lastamount * -1;
            apiService.team.book($scope.lastid, deleteAmount)
                .then(function(response) {
                })
                .catch(function(error) {
                    console.log(error);
                });
            $scope.teams.map(function (team){
                if (team.id === $scope.lastid) {
                    $scope.teamname = team.name;
                }
            })
            $scope.message = true;
            $scope.successmessage = 'Letzte Buchung rückgängig gemacht ('+ deleteAmount +' Getränke ' + $scope.teamname +')';
            $scope.booking = false;
            $scope.count = 0;
        }
    }]);
})();
