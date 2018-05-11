app.controller('MovieController', ['MovieService', 'GenreService', '$http', function(MovieService, GenreService, $http) {
    console.log('MovieController has loaded');
    var self = this;
    self.message = 'Movie Controller';
    self.addMovie = MovieService.addMovie;
    // self.displayMovies = MovieService.movieList;
    self.getMovies = MovieService.getMovies;
    self.movieList = MovieService.movieList;
    self.deleteMovie = MovieService.deleteMovie;
    self.genreList = GenreService.genreList;
    self.getGenre = GenreService.getGenre;
    self.getGenre();
    self.getMovies();


}])