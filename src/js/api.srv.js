(function(){

    'use strict';

    angular.module('app').provider('ApiService',function(){

        var apiEndpointUrl = 'http://api.hackenberg112.de';

        var httpConfig = {};

        this.$get = ['$q','$http',function($q,$http){
            return new ApiService($q,$http,apiEndpointUrl,httpConfig);
        }];

    });

    function ApiService($q,$http,apiEndpointUrl,httpConfig){

        this.operation = {
            loadLatest5: function(){
                return call('Operation','LoadLatest5');
            }
        };

        this.monthlyService = {
            loadCurrentlyOnDuty: function(){
                return call('MonthlyService','LoadCurrentlyOnDuty');
            }
        };

        this.person = {
            listAll: function(){
                return call('Person','ListAll');
            },
            getStatistics: function(){
                return call('Person','GetStatistics');
            }
        };

        this.apiEndpointUrl = function(){
            return apiEndpointUrl;
        };

        var call = function(className,methodName,parameters){
            parameters = parameters || [];
            var deferred = $q.defer();
            $http.post(apiEndpointUrl,{className:className,methodName:methodName,parameters:parameters},httpConfig).
                success(function(data){
                    if(data.errors.length==0) deferred.resolve(data.result);
                    else deferred.reject(data.errors);
                }).
                error(function(data,status,headers,config){
                    console.log(data,status,headers,config);
                    alert('Fehler bei der Kommunikation mit dem Server.\nBitte versuchen Sie es später noch einmal.');
                });
            return deferred.promise;
        };

    }

})();