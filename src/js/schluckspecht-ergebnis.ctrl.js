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
                    $scope.ergebnis.map(function (e){
                        if (max === 0) {
                            max = e.amount;
                            e.prozent = 100;
                        } else {
                            e.prozent = (100/max*e.amount).toFixed(2);
                        }
                        // e.color = colorArray[e.id];
                    })
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        $scope.loadData()
        $interval(function(){
            $scope.loadData();
        },30000)
    }]);
})();
