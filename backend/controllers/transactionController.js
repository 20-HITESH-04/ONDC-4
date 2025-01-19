import Transaction from "../models/Transaction.js";

// Create a new transaction
export const createTransaction = async (req, res) => {
  try {
    const {
      transactionId,
      productId,
      vendorId,
      buyerId,
      batchId,
      type,
      quantity,
      pricePerUnit,
      notes,
    } = req.body;

    const transaction = new Transaction({
      transactionId,
      productId,
      vendorId,
      buyerId,
      batchId,
      type,
      quantity,
      pricePerUnit,
      notes,
    });

    await transaction.save();

    res.status(201).json({ message: "Transaction created successfully", transaction });
  } catch (error) {
    res.status(500).json({ message: "Error creating transaction", error: error.message });
  }
};

// Get all transactions
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate("productId", "name")
      .populate("vendorId", "shopName")
      .populate("buyerId", "firstName lastName")
      .populate("batchId", "expiryDate");

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions", error: error.message });
  }
};

// Get a transaction by ID
export const getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findById(id)
      .populate("productId", "name")
      .populate("vendorId", "shopName")
      .populate("buyerId", "firstName lastName")
      .populate("batchId", "expiryDate");

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transaction", error: error.message });
  }
};

// Update a transaction
export const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      transactionId,
      productId,
      vendorId,
      buyerId,
      batchId,
      type,
      quantity,
      pricePerUnit,
      notes,
    } = req.body;

    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      {
        transactionId,
        productId,
        vendorId,
        buyerId,
        batchId,
        type,
        quantity,
        pricePerUnit,
        notes,
      },
      { new: true, runValidators: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ message: "Transaction updated successfully", updatedTransaction });
  } catch (error) {
    res.status(500).json({ message: "Error updating transaction", error: error.message });
  }
};

// Delete a transaction
export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting transaction", error: error.message });
  }
};
