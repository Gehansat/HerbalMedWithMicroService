const { model, Schema } = require("mongoose");

const cartSchema = new Schema(
  {
    user_id: { 
      type: String, 
      required: true 
    },

    products: { 
      type: Array, 
      required: true 
    },
    
    total_price: { 
      type: Number, 
      required: false 
    },
  },
  { timestamps: true }
);

module.exports = model("cart", cartSchema);
