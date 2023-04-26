const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    quantity: Number,
    status: String,
}, { timestamps: true });