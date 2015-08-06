var app = angular.module('directivePractice');
app.controller('mainCtrl', function($scope, weatherService){
	$scope.showUserData = true;



	$scope.users = [
 {
   name: "Geoff McMammy",
   age: 43,
   email: "geofdude@gmail.com",
   city: "Provo"
 },
 {
   name: "Frederick Deeder",
   age: 26,
   email: "fredeed@gmail.com",
   city: "Austin"
 },
 {
   name: "Spencer Rentz",
   age: 35,
   email: "spencerrentz@gmail.com",
   city: "Sacramento"
 },
 {
   name: "Geddup Ngo",
   age: 43,
   email: "geddupngo@gmail.com",
   city: "Orlando"
 },
 {
   name: "Donst Opbie Leevin",
   age: 67,
   email: "gernee@gmail.com",
   city: "Phoenix"
 }
]
	console.log($scope.currentUser)

	$scope.getWeather = function(city){
    return weatherService.getWeather(city);
	};
	$scope.userSelector = function(user){
    $scope.currentUser = user;
	}

})



var fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

var fibFunc = function(n){
	var fibArr = [0, 1];
	for(var i = 2; i < n; i++) {

    fibArr.push([i - 2]) + ([i - 1]);
  }
  return fibArr[n-2];
}

fibFunc(8);


