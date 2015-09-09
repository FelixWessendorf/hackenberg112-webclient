(function(){

    'use strict';

    angular.module('app').controller('ImageModalController',['$scope','$modalInstance',function($scope,$modalInstance){

        $scope.close = function(){
            $modalInstance.dismiss();
        };

    }]);

})();