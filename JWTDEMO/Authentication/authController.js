const userService = require('../Users/userService');
const { use } = require('./authRouter');
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

function loginUser(email, password, done) {
    userService.findUser(email, (err, result) => {
        if(err){
            done(err)
        }else{
            console.log(`loginUser findUser ${result}`);
            const userVerified = authService.verifyUser({email, password}, result);
                if(userVerified){
                    const jwtToken = authService.createJWT(result);
                    done(undefined, jwtToken);
                }else{
                    done({error: "User not verified"});
                }
            
        }
    });
}

module.exports = {
    registerUser, loginUser
}