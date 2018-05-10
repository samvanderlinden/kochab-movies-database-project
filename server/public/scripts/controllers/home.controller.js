app.controller('HomeController', ['HomeService', '$http', function(MovieService, $http) {
    console.log('HomeController has loaded');
    var self = this;
    self.message = 'Home Controller';
}])