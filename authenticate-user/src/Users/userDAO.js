const users = require('./users.json');

//import users.json file and fs module

//This method will findUser
function findUser(email,done){
    //use filter method to find the user from json file
    let userFetched = users.find(u => u.email == email);
    // console.log(`user fetched ${JSON.stringify(userFetched)}, ${email}`);
    // console.log(`${JSON.stringify(users)}`);
    done(undefined, userFetched);  
}

//This method will register user
function registerUser(userData,done){
   
    //call fileWrite method and write the user in json file
    users.push(userData);
    fs.writeFileSync('../users.json', JSON.stringify(users));
    done(undefined, userData);
}

module.exports = {
    findUser,registerUser
}