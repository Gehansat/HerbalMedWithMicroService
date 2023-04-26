const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user_id:{
        type: String,
        required: true,
    },
    productlist:{
        type: Array,
        default: [],
    },
    quantity:{
        type: Number,
        required: true,
    },
    oneprice:{
        type: Number,
        required: true,
    },
    totalprice:{
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("cart", cartSchema);