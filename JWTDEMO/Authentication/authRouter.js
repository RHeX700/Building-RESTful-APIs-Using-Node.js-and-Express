const express = require('express')
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

module.exports = router