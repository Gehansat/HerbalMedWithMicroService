const User = require("../models/usermodel")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

const authMiddleware = asyncHandler(async(req,res,next) => {
    let token;

    if(req.headers?.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
        console.log("Token",token)
        try{
            if(token){
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                console.log("decode",decoded)
                const user = await User.findById(decoded?.id);
                req.user = user;
                next();
            }
        }
        catch(error){
            console.log(error)
            throw new Error("Not Authorized. Token expired , please login againn to continue")
        }
    }else{
        throw new Error("Error !!!! There is no token attached to header")
    }
})



module.exports = {authMiddleware}