const Review = require("../models/reviewmodel");

//add review
const createReview = async (req, res) => {
    try {
      const { product_id, user_id, comment } = req.body;
      const review = new Review({ product_id, review: [{ user_id, comment }] });
      await review.save();
      res.status(201).json({ message: 'Review created successfully', review });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating review', error });
    }
  };

//get reviews
const getReviews = async (req, res) => {
try {
    const { product_id } = req.params;
    const reviews = await Review.find({ product_id });
    res.status(200).json({ reviews });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting reviews', error });
}
};

module.exports = {createReview,getReviews}