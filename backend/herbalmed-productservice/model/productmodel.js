const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    productprice: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
productSchema.index({ description: "text" });

module.exports = mongoose.model("Product", productSchema);
