(function(){

    'use strict';

    angular.module('app').controller('SchluckspechtControllerErgebnis',['$scope','ApiService','$interval',function($scope, apiService, $interval){
        $scope.plazierung = 0;
        $scope.ergebnis = [
            {
            teamname: 'test',
            getrunken: '3'
            }
        ]
        $scope.loadData = function (){
            console.log('load Data')
            apiService.team.listAll()
                .then(function (return){
                    console.log(return)
                })
                .catch(function(error) {
                    $scope.error.push(error[0]['message']);
                });
        }
        $scope.loadData()

        $interval(function(){
            $scope.loadData();
        },30000)
    }]);


})();
