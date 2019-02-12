const mongoose = require('mongoose');
const db = require('./index.js');
const Trailer = require('./Trailer.js');  // Do I need this?

mongoose.Promise = global.Promise;

const movieSchema = new mongoose.Schema({
  id: { type: Number, index: { unique: true } },
  title: String,
  year: String,
  imdb_id: String,
  mc_slug: String,
  trailers: Array,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
