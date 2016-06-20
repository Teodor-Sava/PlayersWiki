angular
    .module('myApp')
    .controller('teamController',['$scope','$http','$state','$stateParams','$location','$anchorScroll' ,function($scope,$http,$state,$stateParams,$location,$anchorScroll){
        $scope.scrollTo = function(scrollLocation){
            $location.hash(scrollLocation);
            $anchorScroll();
        };
        $scope.pageSize=4;
        $scope.currentPage=1;
        $scope.getTeams = function(){
            $http.get('/api/teams').success(function (response) {
                $scope.teams = response;
            });
        };
        $scope.getTeam = function(){
            var id = $stateParams.id;
            $http.get('/api/teams/'+id).success(function (response) {
                $scope.team = response;
            });
        };
        $scope.addTeam = function () {
            $http.post('/api/teams/',$scope.team).success(function (response) {
                $state.go('/teams');
            });
        };
        $scope.updateTeam = function(){
            var id = $stateParams.id;
            $http.put('/api/teams/'+id,$scope.team).success(function (response) {
                $state.go('/teams');
            });
        };
        $scope.deleteTeam = function(){
            var id = $stateParams.id;
            $http.delete('/api/teams/'+id).success(function (response) {
                $state.go('/teams');
            });
        };
    }]);