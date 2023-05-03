// Import the required dependencies
const http = require("http");
const moviesService = require("./moviesService");
const { result } = require("lodash");
const { error } = require("console");
const getRequestData = require("./utils");

// Define the port at which the application will run
const PORT = 5000;

// Define the server
const server = http.createServer(async (req, res) => {
  // Get all movies
  if(req.url == '/api/v1/movies/' && req.method == 'GET'){
    moviesService.getMovies((error, result) =>{
      if(error){
        res.writeHead(404, {
          "content-type" : "application/json"
        });

        res.end(error);
      }else{
        res.writeHead(200, {
          "content-type" : "application/json"
        });

        res.end(result);
      }
    });
  }
  // Get a movie with specified id
  else if(req.url.match('\/api\/v1\/movies\/([0-9])\/') && req.method == 'GET'){
    id = parseInt(req.url.split('/')[4]);

    moviesService.getMoviesById(id, (error, result) => {
      if(error){
        res.writeHead(404, {
          "content-type" : "application/json"
        });

        res.end(error)
      }else{
        res.writeHead(200, {
          "content-type" : "application/json"
        });

        res.end(result);
      }
    });

  }
  // Save movie details
  else if(req.url == '/api/v1/movies/' && req.method == 'POST'){
    moviesService.saveMovie(JSON.parse(await getRequestData(req)), (error, result) => {

      if(error){
        res.writeHead(400, {
          "content-type" : "application/json"
        });

        res.end(result);
      }else{
        res.writeHead(201, {
          "content-type" : "application/json"
        });
      }
      res.end(result);
    });
  }
  // Update a specific movie
  else if(req.url.match('\/api\/v1\/movies\/([0-9])\/') && req.method == 'PATCH'){
    id = parseInt(req.url.split('/')[4]);

    moviesService.updateMovie(id, JSON.parse(await getRequestData(req)), (error, result) =>{
      if(error){
        res.writeHead(400, {
          "content-type" : "application/json"
        });

        res.end(error);
      }else{
        res.writeHead(200, {
          "content-type" : "application/json"
        });

        res.end(result);
      }
    });
  }
  // Delete a specific movie
  else if(req.url.match('\/api\/v1\/movies\/([0-9])\/') && req.method == 'DELETE'){
    id = parseInt(req.url.split('/')[4]);

    moviesService.deleteMovieById(id, (error, result) => {

      if(error){
        res.writeHead(400, {
          "content-type" : "application/json"
        });

        res.end(error);
      }else{

        res.writeHead(200, {
          "content-type" : "application/json"
        });

        res.end(result);
      }
    });
  }
  // If no route present capture in the else part
});
// listen to the server on the specified port
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
server.on("error", (error) => {
  if (error.code === "EADRINUSE") {
    console.log("Port already in use");
  }
});
