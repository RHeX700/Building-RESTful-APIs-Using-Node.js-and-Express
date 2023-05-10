const jwt = require('jsonwebtoken');
const config = require('../config');

function verifyUser({email, password}, userData) {
    console.log(`authService userData ${JSON.stringify(userData)}`);
    if(email === userData.email && password ===userData.password){
        return true
    }else{
        return false
    }
}

function createJWT(userData){
    const payload = {
        role: "USER",
        email: userData.email,
        name : userData.name
    }

    const token = jwt.sign(payload, config.AUTH_Secret, {
        expiresIn : 3600
    })

    return token
}

module.exports = {
    createJWT,
    verifyUser
}