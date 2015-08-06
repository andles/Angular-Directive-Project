var app = angular.module('directivePractice');
app.directive('dirWeather', function(){
  return {
    templateUrl: 'app/directives/dirWeather.html',
    scope: {
      currentUser: '=',
      weatherCall: '&'
    },
    // link: function(scope, elem, attr){
    //   scope.weatherCall({city: scope.currentUser.city}).then()
    // }
    controller: function($scope){
      console.log($scope.currentUser)
      $scope.weatherCall({city: $scope.currentUser.city}).then(function(response){
        $scope.weather = response;
        console.log($scope.weather);
      });
    }
  }
  })