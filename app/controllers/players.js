angular
    .module('myApp')
    .controller('playerController',['$scope','$http','$state','$stateParams','$location','$anchorScroll' ,function($scope,$http,$state,$stateParams,$location,$anchorScroll) {
        $scope.scrollTo = function(scrollLocation){
            $location.hash(scrollLocation);
            $anchorScroll();
        };
        $scope.pageSize=6;
        $scope.currentPage=1;
        $scope.getPlayers = function () {
        $http.get('/api/players').success(function (response) {
            $scope.players = response;
        });
    };
        $scope.getTeams = function(){
            $http.get('/api/teams').success(function (response) {
                $scope.teams = response;
            });
        };
    $scope.getPlayer = function () {
        var id = $stateParams.id;
        $http.get('/api/players/'+id).success(function (response) {
            $scope.player = response;
        });
    };
    $scope.addPlayer = function () {
        $http.post('/api/players', $scope.player).success(function (response) {
            $state.go('/players')
        });
    };
    $scope.updatePlayer = function () {
        var id = $stateParams.id;
        $http.put('/api/players/' + id, $scope.player).success(function (response) {
            $state.go('/players');
        });
    };
    $scope.deletePlayer = function () {
        var id = $stateParams.id;
        $http.delete('api/players/' + id).success(function (response) {
            $state.go('/players');
        })
    };
}]);

