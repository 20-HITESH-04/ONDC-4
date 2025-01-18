import Vendor from "../models/Vendor.js";

export const createVendor = async (req, res) => {
    try {
      const vendor = new Vendor(req.body);
      await vendor.save();
      res.status(201).json(vendor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const getVendors = async (req, res) => {
    try {
      const vendors = await Vendor.find().populate("user", "name email");
      res.status(200).json(vendors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getVendorById = async (req, res) => {
    try {
      const { id } = req.params;
      const vendor = await Vendor.findById(id).populate("user", "name email");
      if (!vendor) {
        return res.status(404).json({ message: "Vendor not found" });
      }
      res.status(200).json(vendor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateVendor = async (req, res) => {
    try {
      const { id } = req.params;
      const vendor = await Vendor.findByIdAndUpdate(id, req.body, { new: true });
      if (!vendor) {
        return res.status(404).json({ message: "Vendor not found" });
      }
      res.status(200).json(vendor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const deleteVendor = async (req, res) => {
    try {
      const { id } = req.params;
      const vendor = await Vendor.findByIdAndDelete(id);
      if (!vendor) {
        return res.status(404).json({ message: "Vendor not found" });
      }
      res.status(200).json({ message: "Vendor deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };