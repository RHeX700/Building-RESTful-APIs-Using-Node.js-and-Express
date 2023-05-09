//import service layer
const movieservice = require('./movieservice');

const getMovies = (done) => {
//call service method getMovies method
  return movieservice.getMovies(done);
}

const getMovieById = (movieId, done) => {
    //call service method getMovieById method
  return movieservice.getMovieById(movieId, done);
}

const saveMovieDetails = (movieDetails, done) => {
  //call service method saveMovieDetails method
  return movieservice.saveMovieDetails(movieDetails, done);
}

const updateMovieDetails = (movieId, movieDetails, done) => {
  //call service method updateMovieDetails method
  return movieservice.updateMovieDetails(movieId, movieDetails, done);
}

const deleteMovieById = (movieId, done) => {
  //call service method deleteMovieById method
  return movieservice.deleteMovieById(movieId, done);
}

module.exports = {
  getMovies, getMovieById, saveMovieDetails, updateMovieDetails, deleteMovieById
}
