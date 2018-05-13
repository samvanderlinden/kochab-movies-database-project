app.controller('GenreController', ['GenreService', '$mdDialog', '$http', function(GenreService, $mdDialog, $http) {
    console.log('GenreController has loaded');
    var self = this;
    self.message = 'Genre Controller';
    self.addGenre = GenreService.addGenre;
    self.getGenre = GenreService.getGenre;
    self.genreList = GenreService.genreList;
    self.deleteGenre = GenreService.deleteGenre;
    self.getGenre();

}])