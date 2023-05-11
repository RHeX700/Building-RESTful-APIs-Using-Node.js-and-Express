const userDAO = require('./userDAO');

//import dao layer
function findUser(email,done){
    //call the userdao finduser method
    return userDAO.findUser(email, done)
}

function registerUser(userData,done){
    //call the userdao registeruser method
   return userDAO.registerUser(userData, done);
}


module.exports={
    findUser, registerUser
}