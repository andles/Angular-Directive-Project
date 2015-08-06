var app = angular.module('directivePractice');
app.service('weatherService', function($http, $q){
  this.getWeather = function(city){
  	var dfd = $q.defer();
  	$http({
  		method: 'GET',
  		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city
  	}).then(function(response){
  		var weatherParse = {
  			temp: Math.round(response.data.main.temp * 9 / 5 - 495.67),
  			description: response.data.weather[0].description
  		}
  		console.log(weatherParse);
  	  dfd.resolve(weatherParse);
  	})
  	return dfd.promise;
  }
   
});