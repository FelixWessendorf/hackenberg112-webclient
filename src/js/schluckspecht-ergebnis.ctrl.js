(function(){

    'use strict';

    angular.module('app').controller('SchluckspechtControllerErgebnis',['$scope','ApiService','$interval',function($scope, apiService, $interval){
        $scope.plazierung = 0;
        $scope.ergebnis = [
            {
            teamname: 'test',
            getrunken: 35
            },
            {
                teamname: 'test2',
                getrunken: 50
            },
            {
                teamname: 'test3',
                getrunken: 20
            }
        ]
        $scope.loadData = function (){
            console.log('load Data')
            apiService.team.listAll()
                .then(function(response) {
                    var teams = response;
                    var ergebnisArray = [];
                    // $scope.ergebnis.map(function (team){
                    //     if (ergebnisArray.length === 0){
                    //         ergebnisArray.push(team);
                    //     }
                    //     ergebnisArray.map(function (ergebniseintrag){
                    //         if (ergebniseintrag.getrunken < team.getrunken) {
                    //             ergebnisArray.unshift(team)
                    //         } else {
                    //             ergebnisArray.push(team)
                    //         }
                    //     })
                    //
                    // });
                    console.log(Object.entries($scope.ergebnis).sort((a,b) => b[1]-a[1]))
                    // $scope.ergebnis = ergebnisArray;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        $scope.loadData()
        // $interval(function(){
        //     $scope.loadData();
        // },30000)

        $scope.number = 15;

    }]);
})();
