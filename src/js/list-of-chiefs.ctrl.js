(function(){

    'use strict';

    angular.module('app').controller('ListOfChiefsController',['$scope',function($scope){

        $scope.chiefs = [
            {from: '25.11.1894', to: '11.11.1900', name: 'Ernst Sprunkel'},
            {from: '12.11.1900', to: '11.11.1905', name: 'Ernst 0elschläger'},
            {from: '12.11.1905', to: '30.03.1909', name: 'Gustav Hoberg'},
            {from: '31.03.1909', to: '02.03.1912', name: 'Christian Vedder'},
            {from: '03.03.1912', to: '01.07.1925', name: 'Wilhelm Görg'},
            {from: '02.07.1925', to: '13.05.1946', name: 'Ernst Länge'},
            {from: '01.06.1946', to: '19.01.1963', name: 'Paul Gomann'},
            {from: '20.01.1963', to: '16.10.1969', name: 'Erich Bockemühl'},
            {from: '17.10.1969', to: '02.03.1996', name: 'Horst Keller'},
            {from: '03.03.1996', to: '15.03.2003', name: 'Johann Hanke'},
            {from: '16.03.2003', to: 'heute', name: 'Stefan Brand'}
        ];

    }]);


})();