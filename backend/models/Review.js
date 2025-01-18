import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    reviewId: {
      type: String,
      unique: true,
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    buyerId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
