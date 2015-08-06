var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/home', {  
  	templateUrl: 'app/homeTemplate.html',
  	controller: 'mainCtrl'
  })
  .otherwise('/home')
});
