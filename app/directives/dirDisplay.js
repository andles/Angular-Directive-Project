var app = angular.module('directivePractice');
app.directive('dirDisplay', function(){
  return {
	  templateUrl: 'app/directives/dirTemplate.html',
	  link: function(scope, element, attrs){
      element.on('click', function(){
      		scope.showUserData = !scope.showUserData;
      		scope.setUser({user: scope.user})
      		scope.$apply();

      		console.log(scope.user);


      		})
    },
    scope: {
     setUser: '&',
     user: '='
    }, 
    controller: function(){
	  }
	}
  })