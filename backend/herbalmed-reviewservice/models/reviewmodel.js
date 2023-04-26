const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewschema = new Schema({
    productId: {
        type: String,
        required: true
    },
    reviews: {
        type: [{
            userId: {
                type: String,
                required: true
            },
            review: {
                type: String,
                required: true
            }
        }],
        required: true
    }
});

module.exports = mongoose.model("review", reviewschema);
