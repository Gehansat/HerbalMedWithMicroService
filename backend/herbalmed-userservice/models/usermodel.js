const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    refreshToken : {
        type : String,
    },

},
{
    timestamps : true,
});

userSchema.pre("save",async function (next) {
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
};

module.exports = mongoose.model('User', userSchema);