app.controller('MovieController', ['MovieService', 'GenreService', '$mdDialog', 'GenreService', '$http', function(MovieService, GenreService, $mdDialog, GenreService, $http) {
    console.log('MovieController has loaded');
    var self = this;
    self.message = 'Movie Controller';
    self.addMovie = MovieService.addMovie;
    self.getMovies = MovieService.getMovies;
    self.movieList = MovieService.movieList;
    self.deleteMovie = MovieService.deleteMovie;
    self.genreList = GenreService.genreList;
    self.getGenre = GenreService.getGenre;
    self.newMovie = MovieService.newMovie;
    self.getPoster = MovieService.getPoster;
    self.getGenre();
    self.getMovies();

   


}])