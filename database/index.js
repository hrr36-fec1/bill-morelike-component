const mongoose = require('mongoose');
const MONGO_CONNECT_STRING = require('../.env/mongoConnect.js')

// const mongoUri = 'mongodb://localhost/betacritic';
const mongoUri = MONGO_CONNECT_STRING;

const db = mongoose.connect(mongoUri, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.err(err));

module.exports = db;
