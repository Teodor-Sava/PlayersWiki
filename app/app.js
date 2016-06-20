var myApp = angular.module('myApp', [
    'ui.router',
    'ui.bootstrap'
]);
    myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        
   $stateProvider
       .state('/home',{
           url:'/home',
           templateUrl:'/views/home.html'
       })
       .state('/players',{
           url:'/players',
           templateUrl:'/views/players.html',
           controller:'playerController'
       })
       .state('/playerDetails',{
           url:'/players/details/:id',
           templateUrl:'/views/playerDetails.html',
           controller:'playerController'
       })
       .state('addPlayer',{
           url:'/players/add',
           templateUrl:'/views/addPlayer.html',
           controller:'playerController'
       })
       .state('/editPlayer',{
           url:'/players/edit/:id',
           templateUrl:'/views/editPlayer.html',
           controller:'playerController'
       })
       .state('/teams',{
           url:'/teams',
           templateUrl:'/views/teams.html',
           controller:'teamController'
       })
       .state('/teamDetails',{
           url:'/teams/details/:id',
           templateUrl:'/views/teamDetails.html',
           controller:'teamController'

       })
       .state('/addTeam',{
           url:'/teams/addTeam',
           templateUrl:'/views/addTeam.html',
           controller:'teamController'
       })
       .state('/editTeam',{
           url:'/teams/edit/:id',
           templateUrl:'/views/editTeam.html',
           controller:'teamController'
       })
       .state('/coaches',{
       url:'/coaches',
       templateUrl:'/views/coaches.html',
       controller:'coachController'
        })
       .state('/coachDetails',{
           url:'/coaches/details/:id',
           templateUrl:'/views/coachDetails.html',
           controller:'coachController'

       })
       .state('/addCoach',{
           url:'/coaches/addCoach',
           templateUrl:'/views/addCoach.html',
           controller:'coachController'
       })
       .state('/editCoach',{
           url:'/coaches/edit/:id',
           templateUrl:'/views/editCoach.html',
           controller:'coachController'
       })
    }])
        
        .filter('startFrom',function(){
            return function(data,start){
                return data.slice(start);
            }
        });

