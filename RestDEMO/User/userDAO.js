const fs = require('fs');

const getUsers = function (done) { 
    fs.readFile('User/users.json', (err, fileContents) => {
        if(err){
            done("Encountered error while getting users details");
        }

        let userData = JSON.parse(fileContents);
        return done(undefined, userData)
    });

 };


 const getUsersById = function(userId, done){
    fs.readFile('User/users.json', (err, fileContents) => {
        if(err){
            return done("Encountered error while getting details of the user")
        }

        let userData = JSON.parse(fileContents);
        const fetchedUsers = userData.find(usr => usr.userId == userId);



        if(fetchedUsers === undefined){
            return done('No user found for requested user id');
        }

        return done(undefined, fetchedUsers);
    });
 };


 const updateUserDetails = function(userId, userName, done){
    fs.readFile('User/users.json', (err, fileContents) => {

        if(err){
            done("Encountered error while getting user details");
        }

        let userData = JSON.parse(fileContents);
        let index = userData.findIndex(usr => usr.userId == userId);

        if(index == -1){
            done("No user found for requested userId!!!");
        }

        userData[index].userName = userName;

        fs.writeFile('User/users.json', JSON.stringify(userData), (err, updatedContent)=>{
            if(err){
                return done("Error encountered while updating user details")
            }

            return done(undefined, "Successfully updated user details")
        })
    });
 }
 module.exports = {getUsers, getUsersById, updateUserDetails}