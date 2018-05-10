app.service('MovieService', ['$http', function ($http) {
    console.log('MovieService has loaded');
    var self = this;

    self.movieList = {
        list: []
    };

    self.newMovie = {};


    //GET
    self.getMovies = function () {
        $http({
            method: 'GET',
            url: '/movie'
        })
            .then(function (response) {
                self.movieList.list = response.data;
                console.log('this is GET movie response.data', response.data);
            })
            .catch(function (error) {
                console.log('error on /movie GET', error)
            })
    }

    // self.getMovies();

    //POST
    self.addMovie = function (newMovie) {
        console.log(newMovie)
        $http({
            method: 'POST',
            url: '/movie',
            data: newMovie
        })
            .then(function (response) {
                self.getMovies();
            })
            .catch(function (error) {
                console.log('error on movie POST', error)
            })
    }


}])