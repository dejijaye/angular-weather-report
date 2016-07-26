'use strict';

angular
    .module('weatherApp')
    .factory('Weather', function($http) {

        var API_PATH = '//openapiwrapper.herokuapp.com/api/getWeather';


        return {
            getWeather: function(weatherParams) {
                return $http.get(API_PATH, {params: weatherParams});             
            }
        }
    });
