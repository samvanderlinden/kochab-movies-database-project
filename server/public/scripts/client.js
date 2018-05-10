console.log('client.js is running');

var app = angular.module('MovieCollectionApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm',
    }).when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MovieController as vm',
    }).when('/genre', {
        templateUrl: 'views/genre.html',
        controller: 'GenreController as vm',
    }).otherwise({
        template: '<h2>404</h2>'
    })
})