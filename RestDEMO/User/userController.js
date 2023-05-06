const userService = require('./userService');

const getUsers = function(done){
    userService.getUsers(done);
}

const getUsersById = function(userId, done){
    userService.getUsersById(userId, done);

}

const updateUserDetails = function(userId, userName, done){
    userService.updateUserDetails(userId, userName, done);
}

module.exports = {
    getUsers,
    getUsersById,
    updateUserDetails
}