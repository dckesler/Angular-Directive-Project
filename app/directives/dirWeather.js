var app = angular.module('directivePractice');
app.directive('dirWeather', function(){
    return {
        scope: {
            currentUser: '=',
            weatherCall: '&'
        },
        templateUrl: 'app/directives/dirWeather.html',
        controller: function($scope){
            $scope.weatherCall({city: $scope.currentUser.city}).then(function(data){
                console.log(data);
                $scope.weather = data.weather;
                $scope.temp = data.temperature;
            })
        }
    }
});