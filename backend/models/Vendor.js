
import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    shopDescription: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    shopAddress: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
  },
  { timestamps: true }
);

const Vendor = mongoose.model("Vendor", VendorSchema);

export default Vendor;
