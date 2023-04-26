const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || 'mysecret';

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}

module.exports = {generateToken};