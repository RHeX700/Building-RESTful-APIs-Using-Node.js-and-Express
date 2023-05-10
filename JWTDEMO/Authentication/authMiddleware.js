const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];

    if(!token){
        return res.status(403).send("A token required for authentication");
    }

    try {
        const decoded = jwt.verify(token, config.AUTH_Secret);
        req.claims = decoded
    } catch (error) {
        res.status(401).send("Invalid token")
    }

    return next()
}

module.exports = verifyToken;