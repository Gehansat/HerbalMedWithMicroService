const reviewmodel = require("../models/reviewmodel");

// Adding a new review
const createnewreview = async (req, res) => {
    const userId = req.param.userId;
    const productId = req.param.productId;
    const review = req.body.review;
  
    const newreview = new review({
      productId: productId,
      reviews: [{ userId: userId, review: review }]
    });
  
    try {
      await newreview.save();
      res.json("Review Added Successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  };
  

  

// Exporting the functions
  module.exports = {
    createnewreview,

  };