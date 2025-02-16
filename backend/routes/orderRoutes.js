import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// Create a new order
router.post("/", createOrder);

// Get all orders
router.get("/", getAllOrders);

// Get an order by ID
router.get("/:id", getOrderById);

// Update an order
router.put("/:id", updateOrder);

// Delete an order
router.delete("/:id", deleteOrder);

export default router;
