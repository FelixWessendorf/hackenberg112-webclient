(function(){
    'use strict';

    var module = angular.module('app');

    module.controller('NavbarController',['$scope','$location',function($scope,$location){

        $scope.activeItem = function(){
            return $location.path().split('/')[1];
        };

    }]);

})();