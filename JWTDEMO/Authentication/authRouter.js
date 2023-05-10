const express = require('express');
const router = express.Router();
const authController = require('./authController');

router.post('/register',(req, res) => {

    try{
        const {name, email, password} = req.body;
        if(!(name, email, password)){
            return res.status(400).send('Required parameters missing!');
        }

        const userDetails = {
            name, email, password
        }

        authController.registerUser(userDetails,(err, result) =>{
            if(err){
                return res.status(400).send({error:'User Already Exists'});
            }
            else{
                return res.status(201).send(result);
            }
        });
    }catch(err){
        res.status(400).send({error:"Unexpectd error while registering user"});
    }

});

router.post('/login', (req, res) => {
    // try {
        const {email, password} = req.body

        console.log(email, password);
        if(!(email && password)){
            res.status(400).send("Required parameters missing");
        }

        authController.loginUser(email, password, (err, result) => {
            if(err){
                return res.status(400).send({error: "Invalid credentials", err});
            }else{
                return res.status(200).send(result);
            }
        });
    // } catch (error) {
    //     return res.status(500).send("An unexpected error occured while logging in", error);
    // }
});

module.exports = router;