app.controller('HomeController', ['HomeService', '$http', '$mdDialog', function(MovieService, $http, $mdDialog) {
    console.log('HomeController has loaded');
    var self = this;
    self.message = 'Home Controller';
}])