app.controller('MovieController', ['MovieService', '$http', function(MovieService, $http) {
    console.log('MovieController has loaded');
    var self = this;
    self.message = 'Movie Controller';
    self.addMovie = MovieService.addMovie;
    self.getMovies = MovieService.getMovies;


}])