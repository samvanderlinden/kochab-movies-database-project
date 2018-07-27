app.controller('HomeController', ['HomeService', 'MovieService', '$mdDialog', '$http', function(HomeService, MovieService, $mdDialog, $http) {
    console.log('HomeController has loaded');
    var self = this;
    self.message = 'Home Controller';
    self.movieList = MovieService.movieList;
}])