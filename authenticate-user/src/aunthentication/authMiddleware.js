

//import jsonwebtoken and config
const config = require('../../config');
const jwt = require('jsonwebtoken')

//This function verifyToken will verify the token coming from headers 
const verifyToken = (req, res, next) => {
  // Getting the authorization header
  const token = req.headers["authorization"];

 if(!token){
  return res.status(400).send("A token is required for authentication");
 }

 try {
  const decoded = jwt.verify(token, config.AUTH_SECRET);
  req.claims = decoded
 } catch (error) {
  return res.status(401).send("Invalid token")
 }
//Synchronously verify given token using a secret or a public key to get a decoded token 
 
  //return next
  return next();
};

module.exports = verifyToken;