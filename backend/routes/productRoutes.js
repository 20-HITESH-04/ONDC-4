import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  addBatch,
  getBatches
} from "../controllers/productController.js";

const router = express.Router();

// Route for creating a new product
router.post("/", createProduct);

// Route for getting all products
router.get("/", getProducts);

// Route for getting a product by its ID
router.get("/:id", getProductById);

// Route for updating a product by its ID
router.put("/:id", updateProduct);

// Route for deleting a product by its ID
router.delete("/:id", deleteProduct);

// Route for adding a batch to a product
router.post("/:id/batches", addBatch);

// Route for getting all batches of a product
router.get("/:id/batches", getBatches);

export default router;
