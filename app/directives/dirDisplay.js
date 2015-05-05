var app = angular.module('directivePractice');
app.directive('dirDisplay', function(){
  return {
    templateUrl: 'app/directives/dirDisplay.html',
    scope: {
      user: '=',
      setUser: '&'
    },
    link: function(scope, elem, attrs){
      console.log(scope);
      elem.on('click', function(){
        scope.show = !scope.show;
        scope.setUser({user: scope.user});
        scope.$apply();
      });
    }
  };
});
