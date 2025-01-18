import Orders from "../models/Order.js";

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { buyerId, vendorId, products, totalAmount, orderStatus, deliveryDate } = req.body;

    const order = new Orders({
      buyerId,
      vendorId,
      products,
      totalAmount,
      orderStatus,
      deliveryDate,
    });

    await order.save();

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error: error.message });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find().populate("buyerId vendorId products.productId products.batchId");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
};

// Get an order by ID
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Orders.findById(id).populate("buyerId vendorId products.productId products.batchId");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error: error.message });
  }
};

// Update an order
export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus, deliveryDate } = req.body;

    const updatedOrder = await Orders.findByIdAndUpdate(
      id,
      { orderStatus, deliveryDate },
      { new: true, runValidators: true }
    ).populate("buyerId vendorId products.productId products.batchId");

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order updated successfully", updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error: error.message });
  }
};

// Delete an order
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrder = await Orders.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error: error.message });
  }
};
