const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Movies = require('../database/Movie.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// define location of static files
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Endpoint for requesting trailers for a particular movie
// movieId is currently the movie id, but should be the mc_slug value sometime in the future
app.get('/api/movies/:movie_slug/trailers', (req, res) => {
  Movies.find({ mc_slug: req.params.movie_slug }, 'trailers')
    .then(data => res.json(data));
});

const PORT = 3333;

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});