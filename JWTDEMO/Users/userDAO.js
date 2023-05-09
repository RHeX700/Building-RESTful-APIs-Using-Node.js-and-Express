const users = require('./users.json');

const fs = require('fs');

const findUser = (email, done) => {
    let userFetched = users.filter(u => u.email == email)[0];
    done(undefined, userFetched);
}

const registerUser = (userData, done) => {
    users.push(userData);
    fs.writeFileSync('./users.json', JSON.stringify(users));
    done(undefined, userData);
}

module.exports= {
    findUser,
    registerUser
}