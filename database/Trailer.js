NOTE: This file is not actually used. Trailer objects are stored in an array on the movie object, so they are never loaded into mongo using this schema. However, this schema documents the structure and types of the objects in the trailers array for a movie.

const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const trailerSchema = new mongoose.Schema({
  movie_id: Number,
  trailer_title: String,
  thumb_url: String,
  trailer_url: String,
  duration: String,
  watch_count: Number,
});

const Trailer = mongoose.model('Trailer', trailerSchema);


module.exports = Trailer;
