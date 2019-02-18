const Promise = require('bluebird');
const path = require('path');
const fs = Promise.promisifyAll(require('fs'));
const XLSX = require('xlsx');
const db  = require('../database/index.js');

const Movie = require('../database/Movie.js');
//const Trailer = require('../database/Trailer.js');

const movieFilePath = path.join((`${__dirname}/../utils/movies.xlsx`)); 
const trailerFilePath = path.join((`${__dirname}/../utils/trailers.xlsx`));

// Read an Excel file and convert it to an array of objects
const excelFileToArray = function (filePath) {
  let workbook = XLSX.readFile(filePath);
  let sheet_name_list = workbook.SheetNames;
  let rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  rows = JSON.stringify(rows);
  let obj = JSON.parse(rows)
  return obj;
}

// Read the movies spreadsheet and populate an array of movie objects
var movieArray = excelFileToArray(movieFilePath);
//console.log((movieArray));

// trailer spreadsheet and populate an array of trailer objects
var trailerArray = excelFileToArray(trailerFilePath);
//console.log(trailerArray);

// reduce the trailerArray to an object with the movie_id as the key and the array of trailers for that key as the value
let trailerArrObj = trailerArray.reduce(function(acc, trailer) {
  let key= trailer.movie_id;
  if (!acc[key]) {
    acc[key] = [];
  } 
  acc[key].push(trailer);
  return acc;
},{});

movieArray.map(function(movie) {
  // Map the populated trailer array onto each movieArray object, or an empty one if no trailers.
  if (trailerArrObj[movie.id]) {
    movie.trailers = trailerArrObj[movie.id];
  } else {
    movie.trailers = [];
  }
});

//console.log(movieArray);

// Insert all the movies into the database
const insertMovies = function() {
  Movie.create(movieArray)
    .then(() => db.disconnect());
};

// drop the existing Movie database if it exists
//Movie.collection.drop();

insertMovies();
console.log('movies inserted into mongoDB');
