const userDAO = require('./userDAO');

const getUsers = function(done){
    userDAO.getUsers(done);
}

const getUsersById = function(userId, done){
    userDAO.getUsersById(userId, done);
}

const updateUserDetails = function(userId, userName, done){
    userDAO.updateUserDetails(userId, userName, done);
}

module.exports = {
    getUsers,
    getUsersById,
    updateUserDetails
}