const router = require('express').Router();

const pool = require('../modules/pool');

//POST
router.post('/', (req, res) => {
    const newGenre = (req.body)
    console.log('adding new movie', newGenre);
    pool.query(`INSERT INTO "genre" ("genre_name")
                VALUES ($1);`, [newGenre.genre_name])
        .then((results) => {
            console.log('this is newGenre', newGenre);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error with postgres genre POST', error);
            res.sendStatus(500);
        })
})

//GET
router.get('/', (req, res) => {
    let queryText = `SELECT "genre"."id", "genre"."genre_name", COUNT("movies"."genre_id") FROM "movies"
                    RIGHT JOIN "genre" ON "genre"."id" = "movies"."genre_id"
                    GROUP BY "genre"."id";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
        console.log('sending genre result.rows', result.rows)
    })
    .catch((error) => {
        console.log('error on genre GET', error);
        res.sendStatus(500);
    })
})

//DELETE
router.delete('/', (req, res) => {
    let genre = req.query;
    console.log('this is genre req.query', req.query)
    pool.query(`DELETE FROM "genre"
                WHERE "id" = ($1);`, [genre.id])
                .then((response) => {
                    res.sendStatus(200);
                })
                .catch((error) => {
                    res.sendStatus(500);
                    console.log('error with delete genre', error)
                })
})




module.exports = router;