'use strict';

angular
    .module('weatherApp')
    .factory('Weather', function($resource) {

        var API_PATH = 'https://api.openweathermap.org/data/2.5/weather';

        var Weather = $resource(API_PATH);

        return {
            getWeather: function(weatherParams) {
                return Weather.get(weatherParams, function(successResult) {
                    return successResult;
                }, function(errorResult) {
                    console.log(errorResult);
                });             
            }
        }
    });
