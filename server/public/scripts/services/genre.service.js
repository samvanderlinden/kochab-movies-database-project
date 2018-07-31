app.service('GenreService', ['$http', '$mdDialog', function ($http, $mdDialog) {
    console.log('GenreService has loaded');
    var self = this;

    self.genreList = {
        list: []
    };

    self.newGenre = {};

    //GET
    self.getGenre = function () {
        $http({
            method: 'GET',
            url: '/genres'
        })
            .then(function (response) {
                self.genreList.list = response.data;
                console.log('console logging genre response.data', response.data);
            })
            .catch(function (error) {
                console.log('error on getGenres GET', error);
            })
    }

    //POST
    self.addGenre = function (newGenre) {
        console.log(newGenre);
        $http({
            method: 'POST',
            url: '/genres',
            data: newGenre
        })
            .then(function (response) {
                self.getGenre();
                swal({title: "A new genre has been added", 
                    icon: "success"})
            })
            .catch(function (error) {
                console.log('error on addGenre POST', error)
            })
    }

    //DELETE
    self.deleteGenre = function (genre) {
        if (genre.count == 0) {
            $http({
                method: 'DELETE',
                url: '/genres',
                params: genre
            })
                .then(function (response) {
                    self.getGenre();
                })
                .catch(function (error) {
                    console.log('error on deleteGenre DELETE', error)
                })
        }
        else {
            swal({
                title: "Wait!",
                text: "You still have movies with this genre in your collection",
                icon: "alert",
                button: "Got ya!",
              });
        }
    }


}])