import Review from "../models/Review.js";

// Create a new review
export const createReview = async (req, res) => {
  try {
    const { reviewId, productId, buyerId, rating, comment } = req.body;

    const review = new Review({
      reviewId,
      productId,
      buyerId,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json({ message: "Review created successfully", review });
  } catch (error) {
    res.status(500).json({ message: "Error creating review", error: error.message });
  }
};

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("productId", "name")
      .populate("buyerId", "firstName lastName");

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error: error.message });
  }
};

// Get reviews by product ID
export const getReviewsByProductId = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await Review.find({ productId })
      .populate("buyerId", "firstName lastName");

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found for this product" });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error: error.message });
  }
};

// Update a review
export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;

    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { rating, comment },
      { new: true, runValidators: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({ message: "Review updated successfully", updatedReview });
  } catch (error) {
    res.status(500).json({ message: "Error updating review", error: error.message });
  }
};

// Delete a review
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review", error: error.message });
  }
};

