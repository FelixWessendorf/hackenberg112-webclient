(function(){

    'use strict';

    angular.module('app').controller('SchluckspechtBestellungenController',['$scope','ApiService',function($scope, apiService){

        $scope.count = 0;

        apiService.team.listAll()
            .then(function(response) {
                $scope.teams = response
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

        $scope.buchen = function (id, amount) {
            console.log(id, amount);
            // apiService.team.book(id, amount)
            //     .then(function(response) {
            //         console.log(response);
            //         $scope.count = 0;
            //     })
            //     .catch(function(error) {
            //         console.log(error);
            //     });
            $scope.count = 0;
            console.log($scope.teams)
            $scope.teams.map(function (team){
                if (team.id === id) {
                    $scope.teamname = team.name;
                }
            })

            $scope.success = true;
            $scope.number = amount;
        }
    }]);
})();
