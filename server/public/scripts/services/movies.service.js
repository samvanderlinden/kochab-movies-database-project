app.service('MovieService', ['$http', function ($http) {
    console.log('MovieService has loaded');
    var self = this;
    
    self.movieList = {
        list: []
    };

    self.newMovie = {};

    self.addMovie = function (newMovie) {
        console.log(newMovie)
        $http({
            method: 'POST',
            url:'/movie',
            data: newMovie
        })
        .then(function(response) {

        })
        .catch(function(error) {
            console.log('error on movie POST', error)
        })
    }
}])