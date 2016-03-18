(function(){

    'use strict';

    angular.module('app').controller('ImageModalController',['$scope','$uibModalInstance',function($scope,$uibModalInstance){

        $scope.close = function(){
            $uibModalInstance.dismiss();
        };

    }]);

})();