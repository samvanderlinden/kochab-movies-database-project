app.controller('HomeController', ['HomeService', '$mdDialog', '$http', function(HomeService, $mdDialog, $http) {
    console.log('HomeController has loaded');
    var self = this;
    self.message = 'Home Controller';
}])