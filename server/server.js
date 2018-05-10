const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const homeRouter = require("./routes/home.route");
const movieRouter = require('./routes/movie.route');

app.use('/home', homeRouter)
app.use('/movie', movieRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port:', PORT);
})