app.service('MovieService', ['$http', function ($http) {
    console.log('MovieService has loaded');
    var self = this;

    var myKey = '1c3894fcd1f830f0348f7c100ce9a0b7';

    self.movieList = {
        list: [
            {
                id: '',
                name: '',
                release_date: '',
                run_time: '',
                image_url: ''
            }
        ]
    };

    self.newMovie = {};

    //GET MOVIES
    self.getMovies = function () {
        $http({
            method: 'GET',
            url: '/movie',
        })
        .then(function(response) {
            self.movieList.list = response.data;
            console.log('console logging GET response.data', response.data);
        })
        .catch(function(error) {
            console.log('error on /movie GET', error)
        })
    }


    //GET POSTER
    self.getPoster = function (newMovie) {
        var movieBaseUrl = 'https://image.tmdb.org/t/p/w185';
        $http({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: myKey,
                query: self.newMovie.name,
            }
        })
            .then(function (response) {
                var image_path = response.data.results[0].poster_path;
                newMovie.image_url = movieBaseUrl + image_path;
                console.log('this is GET movie response.data.results[0].poster_path', response.data.results[0].poster_path);
                self.addMovie(newMovie);
            })
            .catch(function (error) {
                console.log('error on /movie POSTER GET', error)
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
                self.getMovies(newMovie);
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