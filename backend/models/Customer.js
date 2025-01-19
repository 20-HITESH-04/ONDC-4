// models/Customer.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const CustomerSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Orders", // Reference to the Orders model
      },
    ],
    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: "Products", // Reference to the Products model
      },
    ],
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;