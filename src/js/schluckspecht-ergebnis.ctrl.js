(function(){

    'use strict';

    angular.module('app').controller('SchluckspechtControllerErgebnis',['$scope','ApiService','$interval',function($scope, apiService, $interval) {
        $scope.loadData = function (){
            apiService.team.listAll()
                .then(function(response) {
                    $scope.ergebnis = response;
                    function compare( a, b ) {
                        if ( a.amount > b.amount ){
                            return -1;
                        }
                        if ( a.amount < b.amount ){
                            return 1;
                        }
                        return 0;
                    }
                    $scope.ergebnis.sort( compare );

                    let max = 0;
                    $scope.ergebnis.map(function (team){
                        if (max === 0) {
                            max = team.amount;
                            team.prozent = 100;
                        } else {
                            team.prozent = (100/max*team.amount).toFixed(2);
                        }
                    })
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        $scope.loadData();
        $interval(function(){
            $scope.loadData();
        },30000)
    }]);
})();
