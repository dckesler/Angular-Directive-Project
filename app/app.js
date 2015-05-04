var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'homeCtrl'
    })
    .otherwise('/home');
});
