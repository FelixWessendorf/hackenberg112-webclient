(function(){

    'use strict';

    angular.module('app').controller('HomePageController',['$scope','ApiService',function($scope,apiService){

        $scope.apiEndpointUrl = function(){
            return apiService.apiEndpointUrl();
        };

    }]);


})();