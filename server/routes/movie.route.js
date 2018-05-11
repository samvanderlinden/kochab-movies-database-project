const router = require('express').Router();

const pool = require('../modules/pool');



//GET
router.get('/', (req, res) => {
    // let queryText = `SELECT * FROM "movies";`;
    let queryText = `SELECT "movies"."id", "movies"."name", "movies"."image_url", "movies"."release_date", "movies"."run_time", "genre"."genre_name" 
                    FROM "movies"
                    JOIN "genre" ON "genre"."id" = "movies"."genre_id";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
            console.log('this is our movies result.row', result.rows); //result.rows is array of movie objects
        })
        .catch((error) => {
            console.log('Error making GET movies query', error);
            res.sendStatus(500);
        })
})


//POST
router.post('/', (req, res) => {
    const newMovie = (req.body)
    console.log('adding new movie', newMovie);
    pool.query(`INSERT INTO "movies" ("name", "release_date", "run_time", "image_url", "genre_id")
                VALUES ($1, $2, $3, $4, $5);`, [newMovie.name, newMovie.release_date, newMovie.run_time, newMovie.image_url, newMovie.genre_id])
        .then((results) => {
            console.log('this is newMovie', newMovie);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error with postgres movie POST', error);
            res.sendStatus(500);
        })
})

//DELETE
router.delete('/', (req, res) => {
    const movie = req.query;
    console.log('console logging deleted movie object', movie);
    console.log('deleting movie with id', movie.id);
    pool.query(`DELETE FROM "movies"
                WHERE "id" = ($1);`, [movie.id])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log('error with postgres movie DELETE', error);
        })
})




module.exports = router;