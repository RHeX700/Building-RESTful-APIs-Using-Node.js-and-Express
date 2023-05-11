const express = require('express');
const router = express.Router();

const authController = require('./authController');
//import the modules that are required

//This method post will regiater the use
router.post('/register',(req,res)=>{
  try {
        const {name, email, password} = req.body;

        if(!(name && email && password)){
                return res.status(400).send("Some of the required parameters missing!!!");
        }

        const userDetails = {
                name, email, password
        }
        authController.registerUser(userDetails,(err,result)=>{
                if(err){
                        return res.status(400).send("An error occurred while registering user")
                }
                else{
                        return res.status(201).send(result);
                }
        });
  } catch (error) {
        return res.status(400).send(error);
  }

        //retrive name, email and password from request body
     
        //calling authController registeruser method return the error msg or the result

})

//This method post will login the user once they are registered
router.post('/login',(req,res)=>{
        console.log(`Logging in ...`);

        //retrive email and password from req.body
        const {email, password} = req.body

        if(!(email && password)){
                return res.status(400).send("Some of the required parameters are missing !!!");
        }
      
        //calling the authController login usermethod return the error or the result 
        authController.loginUser({email,password},(err,result)=>{
           if(err){
                console.log(err);
                return res.status(401).send("An error occurred while logging in")
           }

           return res.status(200).send({STATUS:"OK", data:result});
        })

})

module.exports = router