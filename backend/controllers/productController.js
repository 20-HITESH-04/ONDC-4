import Product from "../models/Product.js";

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, description, category, price, stock, vendorId } = req.body;

    // Create a new product
    const newProduct = new Product({
      name,
      description,
      category,
      price,
      stock,
      vendorId,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("vendorId", "shopName").populate("category", "name");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// Get a product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("vendorId", "shopName")
      .populate("category", "name");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  try {
    const { name, description, category, price, stock } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, category, price, stock },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};

// Add a new batch to a product
export const addBatch = async (req, res) => {
  try {
    const { batchId, expiryDate, quantity } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Create the new batch
    product.batches.push({ batchId, expiryDate, quantity });
    await product.save();

    res.status(201).json({ message: "Batch added successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error adding batch", error: error.message });
  }
};

// Get batches of a product
export const getBatches = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product.batches);
  } catch (error) {
    res.status(500).json({ message: "Error fetching batches", error: error.message });
  }
};
