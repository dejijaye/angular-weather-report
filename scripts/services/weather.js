'use strict';

angular
    .module('weatherApp')
<<<<<<< HEAD
    .factory('Weather', function($http) {

        //wrapper for open weather free api endpoint to enable https requests from github
        var API_PATH = '//openapiwrapper.herokuapp.com/api/getWeather';


        return {
            getWeather: function(weatherParams) {
                return $http.get(API_PATH, {params: weatherParams});   
=======
    .factory('Weather', function($resource) {

        var API_PATH = 'http://api.openweathermap.org/data/2.5/weather';

        var Weather = $resource(API_PATH);

        return {
            getWeather: function(weatherParams) {
                return Weather.get(weatherParams, function(successResult) {
                    return successResult;
                }, function(errorResult) {
                    console.log(errorResult);
                });             
>>>>>>> 5a36a941c98a2754844ede0100a8dc9c78c62af1
            }
        }
    });
