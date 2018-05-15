// const pg = require('pg');
// const Pool = pg.Pool;
// const config = {
//   database: 'movie_collection_database', // the name of the database
//   host: 'localhost', // where is your database
//   port: 5432, // the port number for your database, 5432 is the default
//   max: 10, // how many connections at one time
//   idleTimeoutMillis: 30000 // 30 seconds to try to connect
// };

// // one instance to rul them all!
// const pool = new Pool(config);

// pool.on('connect', (client) => {
//   console.log('pg connected');
// })

// pool.on('error', (err, client) => {
//   console.log('Unexpected error on idle pg client', err);
//   process.exit(-1);
// });

// module.exports = pool;

const pg = require('pg');
const url = require('url');

// process.env.DATABASE_URL

let config = {};

if(process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');
  
    config = {
      user: auth[0],
      password: auth[1],
      host: params.hostname,
      port: params.port,
      database: params.pathname.split('/')[1],
      ssl: true, // heroku requires ssl to be true
      max: 10, // max number of clients in the pool
      idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
} else {
    // not on heroku, no process.env.DATABASE_URL
    config = {
      database: 'movie_collection_database', // the name of the database
      host: 'localhost', // where is your database
      port: 5432, // the port number for your database, 5432 is the default
      max: 10, // how many connections at one time
      idleTimeoutMillis: 30000 // 30 seconds to try to connect
    };
}

console.log(config);
// const Pool = pg.Pool; 

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('Postgresql connected');
});

pool.on('error', (error) => {
    console.log('Error with postgres pool', error)
});

module.exports = pool;
