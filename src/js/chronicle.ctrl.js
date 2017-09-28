(function(){

    'use strict';

    angular.module('app').controller('ChronicleController',['$scope','$uibModal',function($scope,$uibModal){

        $scope.images = [
            {thumbImage:'img/chronik/fahrzeuge-1994-thumb.jpg', fullImage:'img/chronik/fahrzeuge-1994.jpg', description:'Fahrzeuge 1994'},
            {thumbImage:'img/chronik/hrw-thumb.jpg', fullImage:'img/chronik/hrw.jpg', description:'HRW 1986-1990'},
            {thumbImage:'img/chronik/lf-16-ts-thumb.jpg', fullImage:'img/chronik/lf-16-ts.jpg', description:'LF 16-TS 1985-1989'},
            {thumbImage:'img/chronik/tsf-ford-1962-1973-thumb.jpg', fullImage:'img/chronik/tsf-ford-1962-1973.jpg', description:'TSF Ford 1962-1973'},
            {thumbImage:'img/chronik/einsatz-von-treckern-thumb.jpg', fullImage:'img/chronik/einsatz-von-treckern.jpg', description:'Einsatz von Treckern 1950er-1962'},
            {thumbImage:'img/chronik/geraetehaus-1955-1985-thumb.jpg', fullImage:'img/chronik/geraetehaus-1955-1985.jpg', description:'Gerätehaus 1955-1985'},
            {thumbImage:'img/chronik/geraetehaus-loehstrasse-bis-1955-thumb.jpg', fullImage:'img/chronik/geraetehaus-loehstrasse-bis-1955.jpg', description:'Gerätehaus Löhstraße bis 1955'},
            {thumbImage:'img/chronik/handdruckspritze-1898-thumb.jpg', fullImage:'img/chronik/handdruckspritze-1898.jpg', description:'Handdruckspritze 1898'}
        ];

        var image = null;
        $scope.image = function(value){
            if(arguments.length===0) return image;
            image = value;
        };

        $scope.showImage = function(event,image){
            $scope.image(image);
            event.preventDefault();
            $uibModal.open({
                animation: true,
                templateUrl: 'templates/image-modal.html',
                controller: 'ImageModalController',
                scope: $scope,
                size: 'lg'
            });
        };

    }]);


})();