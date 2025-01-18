import express from "express";
import {
  createReview,
  getAllReviews,
  getReviewsByProductId,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

// Routes for Review
const router = express.Router();

// Create a review
router.post("/", createReview);

// Get all reviews
router.get("/", getAllReviews);

// Get reviews by product ID
router.get("/product/:productId", getReviewsByProductId);

// Update a review
router.put("/:id", updateReview);

// Delete a review
router.delete("/:id", deleteReview);

export default router;
