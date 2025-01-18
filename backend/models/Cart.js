import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    buyerId: {
      type: Schema.Types.ObjectId,
      ref: "Users", 
      required: true,
    },
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: "Vendors", 
      required: true,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Products", 
          required: true,
        },
        batchId: {
          type: Schema.Types.ObjectId,
          ref: "Products.batches", 
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1, 
        },
        priceAtAdd: {
          type: Number,
          required: true,
        },
        addedAt: {
          type: Date,
          default: Date.now, 
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
