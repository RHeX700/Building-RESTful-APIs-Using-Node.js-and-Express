const userService = require('../Users/userService');
const authService = require('./authService');

function registerUser(userData, done){
    userService.findUser(userData.email, (err, userFound)=>{

        if(err){
            done(err)
        }else if(userFound){
            done(userFound)
        }else{
            userService.registerUser(userData, done);
        }
    })
}

module.exports = {
    registerUser
}