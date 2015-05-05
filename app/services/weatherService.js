var app = angular.module('directivePractice');

app.service('weatherService', function($http, $q){
    this.getWeather = function(city){
        var dfd = $q.defer();
        $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city).then(function(data){
            dfd.resolve({
                temperature: parseInt((data.data.main.temp - 273.15) * (9/5) + 32),
                weather: data.data.weather[0].description
            })
        });
        return dfd.promise;
    }
});