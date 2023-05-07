const fs = require('fs');
//import fs module




//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function(done){
    fs.readFile('./src/products.json', (err, fileContents) => {
      if(err){
        return done(err);
      }

      let productsData = JSON.parse(fileContents);

      return done(null, productsData)
    });

//parse the filecontent and save it in another varible say productdata
//return the callback with first parameter as undefined and second parameter as productdata
       
}


//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function(id,done){
    //write all the logical steps
    //return the callback with first parameter as undefined and second parameter as productDetails
    fs.readFile('./src/products.json', (err, fileContents) => {
      if(err){
        return done(err);
      }

      let productsData = JSON.parse(fileContents);

      let product = productsData.find(p => p.id == id);

      if(product){
        return done(null, product);
      }
      return done("Product with id does not exist");
    });
}


//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
      
  //Write the productData into the file 
  fs.readFile('./src/products.json', (err, fileContents) => {
    if(err){
      return done(err)
    }

    let productsData = JSON.parse(fileContents);
    // if(productsData.find(p => p.id == ProductDetails.id)){
    //   return done('Product with id already exists');
    // }

    productsData.push({"id" : productsData[productsData.length -1].id +1,
    "name" : ProductDetails.name,
    "description" : ProductDetails.description,
    "price" : ProductDetails.price,
    "quantity" : ProductDetails.quantity
  });

    fs.writeFile('./src/products.json', JSON.stringify(productsData), (err, savedData) =>{
      if(err){
        return done("Something went wrong while saving object")
      }

      return done(null, productsData[productsData.length-1]);
    });
  });
     
  //return the callback with undefined and ProductDetails
     
    
  }

  //The method deleteProductById will take productId and done as parameters
  //It will read the product.json file

  const deleteProductById = function(productId, done){
    //Write all the logical steps
     //return the callback with first parameter as undefined and second parameter as productDetails

     fs.readFile('./src/products.json', (err, fileContents) => {
      if(err){
        return done(err);
      }

      let productsData = JSON.parse(fileContents);

      let index = productsData.findIndex(p =>p.id == productId);
      if(index == -1){
        return done("Product with id does not exist");
      }

      productsData.splice(index,1);
      fs.writeFile('./products.json', JSON.stringify(productsData), (err, savedData) =>{
        if(err){
          return done("Something went wrong while saving object")
        }
  
        return done(null, "Product deleted successfully");
      });
    });
  }


module.exports ={
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById
    
}