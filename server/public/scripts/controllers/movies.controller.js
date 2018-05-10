app.controller('MovieController', ['MovieService', '$http', function(MovieService, $http) {
    console.log('MovieController has loaded');
    var self = this;
    self.message = 'Movie Controller';
    self.addMovie = MovieService.addMovie;
    // self.displayMovies = MovieService.movieList;
    self.getMovies = MovieService.getMovies;
    self.movieList = MovieService.movieList
    self.getMovies();


}])