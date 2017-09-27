(function(){

    'use strict';

    angular.module('app').controller('OpenDoorDay2014Controller',['$scope','$uibModal',function($scope,$uibModal){

        $scope.images = [
            {thumbImage:'img/tag-der-offenen-tuer-2014/ausstellung-1-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/ausstellung-1.jpg', description:'Ausstellung 1'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/ausstellung-2-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/ausstellung-2.jpg', description:'Ausstellung 2'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/alte-uniform-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/alte-uniform.jpg', description:'Alte Uniform'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/historische-uebung-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/historische-uebung.jpg', description:'Historische Übung'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/handdruckspritze-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/handdruckspritze.jpg', description:'Handdruckspritze'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/eimerkette-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/eimerkette.jpg', description:'Eimerkette'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/betrieb-der-handdruckspritze-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/betrieb-der-handdruckspritze.jpg', description:'Betrieb der Handdruckspritze'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/von-der-drehleiter-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/von-der-drehleiter.jpg', description:'Von der Drehleiter'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/aufstellung-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/aufstellung.jpg', description:'Aufstellung'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/uebung-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/uebung.jpg', description:'Übung'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/angriffstrupp-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/angriffstrupp.jpg', description:'Angriffstrupp'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/innenangriff-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/innenangriff.jpg', description:'Innenangriff'},
            {thumbImage:'img/tag-der-offenen-tuer-2014/menschenrettung-thumb.jpg', fullImage:'img/tag-der-offenen-tuer-2014/menschenrettung.jpg', description:'Menschenrettung'}
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