const userDAO = require('./userDAO');

function findUser(email, done){
    return userDAO.findUser(email, done);
}

function registerUser(userData, done){
    return userDAO.registerUser(userData, done);
}

module.exports = {
    findUser,
    registerUser
}