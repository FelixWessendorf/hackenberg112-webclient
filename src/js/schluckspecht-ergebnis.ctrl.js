(function(){

    'use strict';

    angular.module('app').controller('SchluckspechtControllerErgebnis',['$scope','ApiService','$interval',function($scope, apiService, $interval) {
        // var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        //     '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        //     '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        //     '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        //     '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        //     '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        //     '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        //     '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        //     '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        //     '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

        var colorArray = [];
        for (var i = 0; i < 10; i++) {
            var newColor = [];
            for (var j = 0; j < 3; j++) {
                var pick = Math.trunc(Math.random() * (360));
                newColor.push(pick)
            }
            colorArray.push(newColor.join());
        }

        console.log(colorArray)
        $scope.ergebnis = [
            {
                name: 'Test1',
                amount: 100,
                color: colorArray[1],
                prozent: 100
            },
            {
                name: 'Test Affen',
                amount: 90,
                color: colorArray[2],
                prozent: 90
            },
            {
                name: 'Die Schluchtspechte vom Berg',
                amount: 75,
                color: colorArray[3],
                prozent: 75
            },
            {
                name: 'Test 7',
                amount: 63,
                color: colorArray[4],
                prozent: 63
            },
            {
                name: 'Test Nasenbären',
                amount: 55,
                color: colorArray[5],
                prozent: 55
            },
            {
                name: 'Adler vom Berg',
                amount: 53,
                color: colorArray[6],
                prozent: 53
            },
            {
                name: 'Superduper Trinker mit Extra langem Namen der gar nicht aufhört und so viele Zeichen hat',
                amount: 32,
                color: colorArray[7],
                prozent: 32
            },
            {
                name: 'Naytec Säufer Truppe',
                amount: 21,
                color: colorArray[8],
                prozent: 21
            },
            {
                name: 'Looser',
                amount: 10,
                color: colorArray[9],
                prozent: 10
            },
        ]
        $scope.loadData = function (){
            // apiService.team.listAll()
            //     .then(function(response) {
            //         console.log(response)
            //         $scope.ergebnis = response;
            //         function compare( a, b ) {
            //             if ( a.amount > b.amount ){
            //                 return -1;
            //             }
            //             if ( a.amount < b.amount ){
            //                 return 1;
            //             }
            //             return 0;
            //         }
            //         $scope.ergebnis.sort( compare );
            //
            //         let max = 0;
            //         $scope.ergebnis.map(function (e){
            //             if (max === 0) {
            //                 max = e.amount;
            //                 e.prozent = 100;
            //             } else {
            //                 e.prozent = (100/max*e.amount).toFixed(2);
            //             }
            //             e.color = colorArray[e.id];
            //         })
            //     })
            //     .catch(function(error) {
            //         console.log(error);
            //     });
        }
        $scope.loadData()
        // $interval(function(){
        //     $scope.loadData();
        // },30000)
    }]);
})();
