import mongoose from "mongoose";

const { Schema } = mongoose;

const BatchSchema = new Schema({
  batchId: {
    type: String,
    required: true,
    unique: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const ProductSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
    },
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: "Vendors",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    batches: [BatchSchema],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
