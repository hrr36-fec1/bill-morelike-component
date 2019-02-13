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

const Review = mongoose.model('Trailer', trailerSchema);


module.exports = Trailer;
