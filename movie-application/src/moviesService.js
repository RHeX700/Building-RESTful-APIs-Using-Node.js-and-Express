// Import the axios library
const axios = require('axios');
const movies = require('../data/movies.json').movies;
const lodash = require('lodash');

const getMovies = (done) => {
  // get all movies
  return done(null, JSON.stringify(movies));
}

const getMoviesById = (movieId, done) => {
  // get movie by id
  let movie = lodash.find(movies, m => m.id == movieId);

  if(movie){
    done(null, JSON.stringify(movie))
  }else{
    done("Requested movie does not exist")
  }

}

const saveMovie = function (newMovie, done) {
  // save the details of a movie read from the request body
  let movie_ = lodash.find(movies, m => m.id == newMovie.id);

  if(!movie_){
    movies.push(newMovie);
    return done(null, JSON.stringify(movies))
  }else{
    return done('Movie with id already exists');
  }
}

const updateMovie = function (movieId, updateData, done) {
 // update movie details of a specific movie
 let movie_ = lodash.find(movies, m => m.id == movieId);
 if(movie_){
  movie_.movieName = updateData.movieName;
  movie_.director = updateData.director;
  movie_.rating = updateData.rating;

  return done(null, JSON.stringify(movies));
 }else{
  return done("Movie with id does not exist");
 }
}

const deleteMovieById = function (movieId, done) {
  // delete a specific movie 
  let movieIndex = lodash.findIndex(movies, m => m.id == movieId);
  
  if(movieIndex != -1){

    movies.splice(movieIndex, 1);
    return done(null, JSON.stringify(movies));
  }else{
    return done("Movie with id does not exist");
  }
}



module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
}
