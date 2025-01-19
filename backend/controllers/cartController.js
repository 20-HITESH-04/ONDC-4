import Cart from "../models/Cart.js";

// Create or update a cart
export const upsertCart = async (req, res) => {
  try {
    const { buyerId, vendorId, items } = req.body;

    // Check if a cart exists for this buyer and vendor
    let cart = await Cart.findOne({ buyerId, vendorId });

    if (cart) {
      // Update existing cart
      items.forEach((newItem) => {
        const existingItemIndex = cart.items.findIndex(
          (item) =>
            item.productId.toString() === newItem.productId &&
            item.batchId.toString() === newItem.batchId
        );

        if (existingItemIndex >= 0) {
          // Update quantity and price for existing item
          cart.items[existingItemIndex].quantity += newItem.quantity;
          cart.items[existingItemIndex].priceAtAdd = newItem.priceAtAdd;
        } else {
          // Add new item to cart
          cart.items.push(newItem);
        }
      });
    } else {
      // Create new cart
      cart = new Cart({
        buyerId,
        vendorId,
        items,
      });
    }

    await cart.save();
    res.status(201).json({ message: "Cart updated successfully", cart });
  } catch (error) {
    res.status(500).json({ message: "Error updating cart", error: error.message });
  }
};

// Get cart for a buyer and vendor
export const getCart = async (req, res) => {
  try {
    const { buyerId, vendorId } = req.params;
    const cart = await Cart.findOne({ buyerId, vendorId }).populate("items.productId", "name description").populate("items.batchId", "expiryDate");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error: error.message });
  }
};

// Remove an item from the cart
export const removeItemFromCart = async (req, res) => {
  try {
    const { buyerId, vendorId, productId, batchId } = req.params;

    const cart = await Cart.findOne({ buyerId, vendorId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) =>
        item.productId.toString() !== productId || item.batchId.toString() !== batchId
    );

    await cart.save();
    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Error removing item from cart", error: error.message });
  }
};

// Clear a cart
export const clearCart = async (req, res) => {
  try {
    const { buyerId, vendorId } = req.params;

    const cart = await Cart.findOneAndDelete({ buyerId, vendorId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error clearing cart", error: error.message });
  }
};
