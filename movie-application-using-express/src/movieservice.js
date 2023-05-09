const axios = require('axios');
//import axios module

//After starting the JSOn server check the port on which is running accordingly change 
//the port in url given below

//This method will get all movies from json server
const getMovies = (done) => {
  // This url can be used - axios.get("http://localhost:3000/movies")
  return axios.get("http://localhost:3000/movies").then(result => {
    done(null, result);
  }, err=>{
    done(err);
  });
 
}

//This method will get specific movie id from json server
const getMovieById = (movieId, done) => {
  // This url can be used- axios.get(`http://localhost:3000/movies/${movieId}`)
  return axios.get(`http://localhost:3000/movies/${movieId}`).then(
    result =>{
      done(null, result);

    }
  )
 
}
//This method will save Movie details in Json server
const saveMovieDetails = (movieDetails, done) => {
  //This url can be used  -  axios.post(`http://localhost:3000/movies`, movieDetails)
  return axios.post(`http://localhost:3000/movies`, movieDetails).then(
    result => {
      done(null, result)
    }
  );
}

//This method will update MovieDetails in Json Server
const updateMovieDetails = (movieId, movieDetails, done) => {
  //This url can be used - axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails)
  return  axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails).then(
    result => {
      done(null, result);
    }
  );
}

//This method will delete specific movie from Json Server
const deleteMovieById = (movieId, done) => {
  //This url can be used -  axios.delete(`http://localhost:3000/movies/${movieId}`)
  return  axios.delete(`http://localhost:3000/movies/${movieId}`).then(
    result => {
      done(null, result);
    }
  );
}

module.exports = {
  getMovies, getMovieById, saveMovieDetails, deleteMovieById, updateMovieDetails
}
