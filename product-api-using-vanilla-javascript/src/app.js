//Import the necessary dependencies
const http = require('http')
const fs = require('fs');
// Define a prot at which the server will run
const PORT =  5000;

const productsService = require("./productsService");
const getRequestData = require('./utils');

const server = http.createServer(async (req, res) => {
  // Get all products

  // Get a product with specified id

  // Create a new product

  // Update a specific product

  // Delete a specific Product

});

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})