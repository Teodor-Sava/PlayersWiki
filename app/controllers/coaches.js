angular
    .module('myApp')
    .controller('coachController',['$scope','$http','$state','$stateParams','$location','$anchorScroll','dataFactory' ,function($scope,$http,$state,$stateParams,$location,$anchorScroll,dataFactory) {
        $scope.scrollTo = function(scrollLocation){
            $location.hash(scrollLocation);
            $anchorScroll();
        };
        $scope.pageSize=6;
        $scope.currentPage=1;
        $scope.getPlayers = function(){
            dataFactory.getPlayers().then(function (response) {
                $scope.players = response.data;
            })
        };
        $scope.getTeams= function(){
            dataFactory.getTeams().then(function (response) {
                $scope.teams = response.data;
            })
        };

        $scope.getCoaches = function(){
            $http.get('/api/coaches').success(function(response){
                $scope.coaches = response ;
            });  
        };
        $scope.getCoach = function () {
            var id = $stateParams.id;
            $http.get('/api/coaches/'+id).success(function (response) {
                $scope.coach = response;
            });
        };
        $scope.addCoach = function () {
            $http.post('/api/coaches', $scope.coach).success(function (response) {
                $state.go('/coaches')
            });
        };
        $scope.updateCoach = function () {
            var id = $stateParams.id;
            $http.put('/api/coaches/' + id, $scope.coach).success(function (response) {
                $state.go('/coaches');
            });
        };
        $scope.deleteCoach = function () {
            var id = $stateParams.id;
            $http.delete('api/coaches/' + id).success(function (response) {
                $state.go('/coaches');
            })
        };
    }]);

