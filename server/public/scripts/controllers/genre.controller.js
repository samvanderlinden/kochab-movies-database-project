app.controller('GenreController', ['GenreService', '$http', function(GenreService, $http) {
    console.log('GenreController has loaded');
    var self = this;
    self.message = 'Genre Controller';
    self.addGenre = GenreService.addGenre;
    self.getGenre = GenreService.getGenre;
    self.genreList = GenreService.genreList;
    self.getGenre();

}])