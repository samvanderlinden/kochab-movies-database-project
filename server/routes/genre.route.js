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
    let queryText = `SELECT * FROM "genre";`;
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




module.exports = router;