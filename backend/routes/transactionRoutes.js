import express from "express";
import {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionController.js";

const router = express.Router();

// Create a new transaction
router.post("/", createTransaction);

// Get all transactions
router.get("/", getAllTransactions);

// Get a transaction by ID
router.get("/:id", getTransactionById);

// Update a transaction
router.put("/:id", updateTransaction);

// Delete a transaction
router.delete("/:id", deleteTransaction);

export default router;
