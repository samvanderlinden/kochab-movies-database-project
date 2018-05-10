const router = require('express').Router();

const pool = require('../modules/pool');

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
                    console.log('error with movie POST', error);
                    res.sendStatus(500);
                })
})

//GET
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "movies";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
        console.log('this is our movies result.row', result.rows); //result.rows is array of objects
    })
    .catch((error) => {
        console.log('Error making GET movies query', error);
        res.sendStatus(500);
    })
})


module.exports = router;