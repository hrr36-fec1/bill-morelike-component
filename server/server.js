const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Movies = require('../database/Movie.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// define location of static files
app.use(express.static('public'));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(function(req, res, next) {
  // allow CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Endpoint for requesting trailers for a particular movie
// movieId is currently the mc_slug value 
app.get('/api/movies/:movie_slug/trailers', (req, res) => {
  Movies.find({ mc_slug: req.params.movie_slug })
    .then(data => res.json(data));
});

const PORT = 8081;

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});