const mongoose = require('mongoose');
const db = require('./index.js');
//const Trailer = require('./Trailer.js');  

mongoose.Promise = global.Promise;

const movieSchema = new mongoose.Schema({
  id: { type: Number, index: { unique: true } },
  title: String,
  year: Number,
  imdb_id: String,
  mc_slug: String,
  trailers: Array,
},
{
  timestamps: true
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

