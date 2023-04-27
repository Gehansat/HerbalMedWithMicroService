const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema(
  {
    product_id: { 
        type: String, 
        required: true 
    },
    review: [
      {
        user_id: { 
            type: String, 
            required: true 
        },
        comment: { 
            type: String, 
            required: true 
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("review", ReviewSchema);
