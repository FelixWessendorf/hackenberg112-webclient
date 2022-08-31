(function(){

    'use strict';

    angular.module('app').provider('ApiService',function(){

        var apiEndpointUrl = 'http://localhost:7070';

        var httpConfig = {};

        this.$get = ['$q','$http',function($q,$http){
            return new ApiService($q,$http,apiEndpointUrl,httpConfig);
        }];

    });

    function ApiService($q,$http,apiEndpointUrl,httpConfig){

        this.operation = {
            loadLatest5: function(){
                return call('Operation','LoadLatest5');
            },
            loadOperations: function(){
                return call('Operation','LoadOperations');
            },
            newMission: function(date, description, password){
                return call('Operation','newMission', [date, description, password]);
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

        this.team = {
            create: function(name, members) {
                return call('Team', 'Create', [name, members]);
            },
            listAll: function() {
                return call('Team', 'listAll', []);
            },
            book: function(id, amount) {
                return call('Team', 'book', [id, amount]);
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
                    if(data.errors.length===0) deferred.resolve(data.result);
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
