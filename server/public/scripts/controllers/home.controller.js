app.controller('HomeController', ['HomeService', 'MovieService', '$mdDialog', '$http', function(HomeService, MovieService, $mdDialog, $http) {
    console.log('HomeController has loaded');
    var self = this;
    self.message = 'Home Controller';
    // self.addMovie = MovieService.addMovie;
    // self.getMovies = MovieService.getMovies;
    self.movieList = MovieService.movieList;
    // self.deleteMovie = MovieService.deleteMovie;
    // self.genreList = GenreService.genreList;
    // self.getGenre = GenreService.getGenre;
    // self.newMovie = MovieService.newMovie;
    // self.moviePoster = MovieService.movieList.list;
    // self.getPoster = MovieService.getPoster;
    // self.getGenre();
    // self.getMovies();
}])