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
  if(lodash.findIndex(p => p.id == productId) === -1){
    return done("Requested product doesn't exist..!")
  }else{
    product = lodash.find(productsList, p => p.id == productId);
  

    return done(null, JSON.stringify(product));
  }
}

const saveProduct = (newProduct, done) => {
 // save a product
  productsList.push(newProduct);
  return done(null, JSON.stringify(productsList));
}

const updateProduct = (productId, updateData, done) => {
  let updatedProductList = null;
  // update the product list
  let productIndex = lodash.findIndex(getProductsById(productId));
  productsList[productIndex].name = updateData.name;
  productsList[productIndex].description = updateData.description;
  productsList[productIndex].price = updateData.price;
  productsList[productIndex].quantity = updateData.quantity;

  done(null, JSON.stringify(productList));
}

const deleteProduct = (productId, done) => {
  // delete a product    
  let productIndex = lodash.findIndex(getProductsById(productId));
  productsList.splice(productIndex, 1)
  done(null, JSON.stringify(productsList));
}


module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}