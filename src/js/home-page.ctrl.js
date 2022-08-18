(function(){

    'use strict';

    angular.module('app').controller('HomePageController', ['$scope', 'ApiService', '$uibModal', controller]);

    function controller($scope, apiService, $uibModal) {

        $scope.apiEndpointUrl = function() {
            return apiService.apiEndpointUrl();
        };
    }

})();
