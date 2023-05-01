//Import the necessary dependencies
const http = require('http')
const fs = require('fs');
// Define a prot at which the server will run
const PORT =  5000;

const productsService = require("./productsService");
const getRequestData = require('./utils');

const server = http.createServer(async (req, res) => {
  // Get all products
  if(req.url === '/api/v1/products' && req.method == 'GET'){
    console.log('GET request received @ /api/v1/products');

    res.writeHead(200, {
      "content-type" : "application/json"
    });

    res.end(productsService.getProducts());
  }

  // Get a product with specified id
  else if(req.url.match('\/api\/v1\/products\/([0-9])') && req.method == 'GET'){
    console.log(`GET request received at /api/v1/products/${req.url.split('/')[4]}`);
    let id = parseInt(req.url.split('/')[4]);
    let product = productsService.getProductsById(id)
    if(product != "Requested product doesn't exist..!"){
      res.writeHead(200, {
        "content-type" : "application/json"
      })
      res.end(product);
    }else{
      res.writeHead(404, {
        "content-type" : "application/json"
      });
      res.end(product);
    }
  }

  // Create a new product
  else if(req.url === '/api/v1/products' && req.method == 'POST'){
    console.log('POST request sent to api/v1/products');
    data = await getRequestData(req);

    productsService.saveProduct(JSON.parse(data));

    res.writeHead(201, {
      "content-type" : "application/json"
    })
    res.end(JSON.stringify(JSON.parse(data)));
  }
  // Update a specific product

  else if(req.url.match('\/api\/v1\/products\/([0-9])') && req.method== 'PATCH'){
    console.log('PATCH request sent to api/v1/products');
    data = await getRequestData(req);
    let id = parseInt(req.url.split('/')[4]);

    productsService.updateProduct(id, JSON.parse(data));

    res.writeHead(200, {
      "content-type" : "application/json"
    });

    res.end(productsService.getProducts());
  }

  // Delete a specific Product
  else if(req.url.match('\/api\/v1\/products\/([0-9])') && req.method== 'DELETE'){
    console.log('DELETE request sent to api/v1/products');
    let id = parseInt(req.url.split('/')[4]);

    productsService.deleteProduct(id);

    res.writeHead(200, {
      "content-type" : "application/json"
    });

    res.end(productsService.getProducts());
  }

});

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})
