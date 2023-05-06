const {Router} = require('express');
const express = require('express');
const routes = express.Router();

const userController = require('./userController');

routes.get("/", (req, res) => {
    try {
        userController.getUsers((err, results) => {
            if(err){
                return res.status(404).send(err);
            }
            return res.status(200).send({status: 'OK', data: results});
        });
    } catch (error) {
        return res.status(500).send('Try after sometime');
    }
});

routes.get("/:userid", (req, res) => {
    try {
        const userId = req.params.userid;
        userController.getUsersById(userId, (err, result) => {
            if(err){
                return res.status(400).send(err)
            }
            return res.status(200).send({status : "OK", data : result});
        });
    } catch (error) {
        return res.status(500).send('Unexpected error, try after some time');
    }
});

routes.put("/:userid", (req, res) => {

    try {
        userId = req.params.userid;
        userName = req.body.userName;
        userController.updateUserDetails(userId, userName, (err, results) =>{
            if(err){
                return res.status(400).send(err);
            }
            return res.status(200).send(results);
        });
    } catch (error) {
        return res.status(500).send("Unexpected error, Try after some time");
    }


});

module.exports = routes