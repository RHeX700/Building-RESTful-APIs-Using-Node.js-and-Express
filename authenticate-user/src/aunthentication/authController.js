

//import the userService and authService module
const authService = require('./authService');
const userService = require('../Users/userService')
//This function will registerUser it will take two parameters
//first the userData second the callback
//call the userService finduser method and also the userService register method
function registerUser(userData,done){
  if(err){
      done(err);
  }else if(userFound){
      done(userFound)
  }else{
      userService.registerUser(userData, done);
  }  
}

//This function will loginUser 
//Use the method findUser of userService to first verify and if userfound than call
//the createToken method
function loginUser({ email, password }, done) {
  userService.findUser(email, (err, result) => {
    if(err){
        done(err)
    }else{
        console.log(`loginUser findUser ${JSON.stringify(result)}`);
        console.log(`${email}, ${password}`);
        const userVerified = authService.verifyUser({email, password}, result);
        console.log(`userVerified : ${userVerified}`);
            if(userVerified){
                console.log('Creating jwt token');
                const jwtToken = authService.createJWT(result);
                done(null, jwtToken);
            }else{
                done({error: "User not verified"});
            }
        
    }
});

  }

module.exports = {
    registerUser,loginUser

}