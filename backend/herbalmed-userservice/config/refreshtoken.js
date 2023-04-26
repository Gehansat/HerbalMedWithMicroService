const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || 'mysecret';

const generateRefreshToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"3d"});
}

module.exports = {generateRefreshToken}