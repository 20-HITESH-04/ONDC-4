import express from "express";
import {
  createVendor,
  getVendors,
  getVendorById,
  updateVendor,
  deleteVendor,
} from "../controllers/vendorController.js";

const router = express.Router();

router.post("/vendors", createVendor);
router.get("/vendors", getVendors);
router.get("/vendors/:id", getVendorById);
router.put("/vendors/:id", updateVendor);
router.delete("/vendors/:id", deleteVendor);

export default router;