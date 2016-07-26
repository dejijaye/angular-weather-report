'use strict';

angular
    .module('weatherApp')
    .controller('cityCtrl', function($scope, Weather) {

        $scope.cities = [
            { text: 'Lisbon' },
            { text: 'Paris' },
            { text: 'Los Angeles' }
        ];
        $scope.weatherReport = [];

        $scope.date = Date.now();

        $scope.defaultView = function() {
            $scope.cities.forEach(function(city) {
                $scope.getWeatherReport(city);
            });
        }

        $scope.getTag = function(tag) {
            $scope.getWeatherReport(tag);
        };

        $scope.removeTag = function(tag) {
            $scope.weatherReport.forEach(function(report) {
                if(tag.text.toLowerCase() === report.name.toLowerCase()) {
                    $scope.weatherReport.splice($scope.weatherReport.indexOf(report), 1);
                }
            });
        }

        $scope.getWeatherReport = function(tag) {

            var paramObj = {
                q: tag.text,
                APPID: "0c95eae133a4b8ad31979dea50dd7bee"
            }

            Weather.getWeather(paramObj).success(function(res) {
                console.log(JSON.parse(res));
                $scope.weatherReport.push(JSON.parse(res));
                console.log($scope.weatherReport);

            }).error(function(res) {
                console.log('error loading report' + error);
            });
        }


    });