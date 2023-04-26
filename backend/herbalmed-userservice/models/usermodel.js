const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    },
    role:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("user", userSchema);