const express = require('express');
const router = express.Router()

const userController = require('./userController');

router.get('/', (req, res) => {
    try {
        let userData = req.claims
        console.log(claims);
        if(!userData.email){
            return res.status(400).send('User email not available');
        }

        userController.findUser(email, (err, result) =>{
            if (err) {
                return res.status(400).send("Erroe while getting user");
            }
            return res.status(200).send(result);
        });
    } catch (error) {
        return res.status(500).send({error:"Unexpected error while getting user, try again later"});
    }
});

module.exports = router;