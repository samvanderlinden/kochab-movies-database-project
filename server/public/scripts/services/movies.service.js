app.service('MovieService', ['$http', function ($http) {
    console.log('MovieService has loaded');
    var self = this;

    self.movieList = {
        list: [
            {
                id: '',
                name: '',
                release_date: '',
                run_time: '',
                image_url: 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg'

            }
        ]
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

    //DELETE
    self.deleteMovie = function (deletedMovie) {
        $http({
            method: 'DELETE',
            url: '/movie',
            params: deletedMovie
        })
        .then(function(response) {
            console.log ('delete button clicked');
            self.getMovies();
        })
        .catch(function (error) {
            console.log('error making DELETE query', error);
        })
    }

}])