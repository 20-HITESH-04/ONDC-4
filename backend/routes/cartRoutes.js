import express from "express";
import {
  upsertCart,
  getCart,
  removeItemFromCart,
  clearCart,
} from "../controllers/cartController.js";

const router = express.Router();

// Upsert (create/update) a cart
router.post("/", upsertCart);

// Get a cart for a specific buyer and vendor
router.get("/:buyerId/:vendorId", getCart);

// Remove an item from the cart
router.delete("/:buyerId/:vendorId/:productId/:batchId", removeItemFromCart);

// Clear a cart
router.delete("/:buyerId/:vendorId", clearCart);

export default router;
