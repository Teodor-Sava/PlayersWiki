angular.module('myApp')
    .factory('dataFactory',['$http',function ($http){
        var dataFactory=this;
        
        dataFactory.getPlayers= function () {
            return $http.get('api/players');
        };
        dataFactory.getTeams = function(){
            return $http.get('api/teams');
        };
        dataFactory.getCoaches = function(){
            return $http.get('/api/coaches');
        };
        return dataFactory;

    }])
;
