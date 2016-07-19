'use strict';

angular.module('weatherApp', ['ngRoute','ngResource','ngTagsInput'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'cityCtrl'
            })
            .otherwise({
                redirectTo:'/'
            });
    });