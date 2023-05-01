// Import the necessary dependencies
const lodash = require("lodash");
let productsList = require("./products.json").products;


const getProducts = () => {
  // get all products
  return JSON.stringify(productsList);
}

const getProductsById = (productId, done) => {
  let product = null

  // get a product by ID
  // if(lodash.findIndex(p => p.id == productId) === -1){
  //   return done("Requested product doesn't exist..!")
  // }
  product = lodash.find(productsList, p => p.id == productId);
  if(!product){
    return "Requested product doesn't exist..!";
  }

  // return done(null, JSON.stringify(product));
  return JSON.stringify(product)
}

const saveProduct = (newProduct, done) => {
 // save a product
  let product = lodash.find(productsList, p => p.id == newProduct.id);
  if(!product){
    productsList.push(newProduct);
    // return done(null, JSON.stringify(productsList));    
    return
  }
  // return done("Product already exists..!")
  return "Product already exists..!"

}

const updateProduct = (productId, updateData, done) => {
  let updatedProductList = null;
  // update the product list
  let product = lodash.find(productsList, p => p.id == productId);
  if(product){
    let productIndex = lodash.findIndex(productsList, p => p.id == productId);
    productsList[productIndex].name = updateData.name;
    productsList[productIndex].description = updateData.description;
    productsList[productIndex].price = updateData.price;
    productsList[productIndex].quantity = updateData.quantity;
  }else{
    return "Requested product doesn't exist..!";
  }

  // done(null, JSON.stringify(productsList));
  return
}

const deleteProduct = (productId, done) => {
  // delete a product    
  let productIndex = lodash.findIndex(productsList, p => p.id == productId);
  if(productIndex == -1){
    // return done("Requested product doesn't exist..!")
    return "Requested product doesn't exist..!";
  }
  productsList.splice(productIndex, 1)
  // done(null, JSON.stringify(productsList));
  return JSON.stringify(productsList);
}


module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}