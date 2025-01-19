import mongoose from "mongoose";

const { Schema } = mongoose;

const transactionSchema = new Schema({
  transactionId: {
    type: String,
    unique: true,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  vendorId: { 
    type: Schema.Types.ObjectId, 
    ref: "Vendors", 
    required: true 
},
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  batchId: {
    type: Schema.Types.ObjectId,
    ref: "Products.batches",
    required: true,
  },
  type: {
    type: String,
    enum: ["sale", "addition", "adjustment", "cart"],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pricePerUnit: {
    type: Number,
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
