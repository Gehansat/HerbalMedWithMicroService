const User = require("../models/usermodel")
const Token = require("../models/token");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const {generateRefreshToken} = require("../config/refreshtoken");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

//add user
const createuser = asyncHandler(async (req,res) => {
    const email = req.body.email;
    const findUser = await User.findOne({email:email});

    if(!findUser){
        //create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    }else{
        throw new Error("Error !!!! User Already Exists !!!!")
    }     
})

///user login
const loginusercontrol = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //check if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
      const refreshToken = await generateRefreshToken(findUser?._id);
      const updateuser = await User.findByIdAndUpdate(
        findUser.id,
        {
          refreshToken: refreshToken,
        },
        {
          new: true,
        }
      );
      const token = generateToken(findUser?._id);
      let result = await Token.create({ token: token });
      if (result) {
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
          _id: findUser?._id,
          email: findUser?.email,
          password: findUser?.password,
          token: generateToken(findUser?._id),
        });
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      throw new Error("Credentials are Invalid !!!!");
    }
  });


//logout function
const logout = asyncHandler(async(req,res) => {
    const cookie = req.cookies;
    if(!cookie?.refreshToken) throw new Error("No refresh token in cookies")
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({refreshToken});
    if(!user){
        res.clearCookie("refreshToken",{
            httpOnly : true,
            secure : true,
        });
        return res.status(204);  //forbidden
    }
    await User.findOneAndUpdate(refreshToken,{
        refreshToken : "",
    });
    res.clearCookie("refreshToken",{
        httpOnly : true,
        secure : true,
    });
    return res.sendStatus(204);  //forbidden
})

//handle refresh token
const handlerefreshtoken = asyncHandler(async(req,res) => {
    const cookie = req.cookies;
    console.log(cookie);
    if(!cookie?.refreshToken) throw new Error("No refresh Token in cookies");
    const refreshToken = cookie.refreshToken;
    console.log(refreshToken);
    const user = await User.findOne({refreshToken});
    if(!user) throw new Error('Errrorr !!!! No refresh token present in db or not matched');
    jwt.verify(refreshToken, process.env.JWT_SECRET,(err,decoded) => {
        if(err || user.id !== decoded.id){
            throw new Error("Error in refresh token")
        }
        const accessToken = generateToken(user?._id);
        res.json({accessToken})
    })
})

module.exports = {
    createuser,
    loginusercontrol,
    handlerefreshtoken,
    logout
};