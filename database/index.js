const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/betacritic';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.err(err));

module.exports = db;
