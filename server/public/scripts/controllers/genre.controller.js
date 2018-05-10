app.controller('GenreController', ['GenreService', '$http', function(GenreService, $http) {
    console.log('GenreController has loaded');
    var self = this;
    self.message = 'Genre Controller';
}])