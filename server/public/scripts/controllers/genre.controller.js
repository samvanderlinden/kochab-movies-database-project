app.controller('GenreController', ['GenreService', '$http', '$mdDialog', '$scope', function(GenreService, $http, $mdDialog, $scope) {
    console.log('GenreController has loaded');
    var self = this;
    self.message = 'Genre Controller';
    self.addGenre = GenreService.addGenre;
    self.getGenre = GenreService.getGenre;
    self.genreList = GenreService.genreList;
    self.deleteGenre = GenreService.deleteGenre;
    self.getGenre();

}])