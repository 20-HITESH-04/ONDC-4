// Create a new customer
export const createCustomer = async (req, res) => {
    try {
      const { userId, address, phone } = req.body;
  
      // Check if the customer already exists
      const existingCustomer = await Customer.findOne({ userId });
      if (existingCustomer) {
        return res.status(400).json({ message: "Customer already exists." });
      }
  
      const newCustomer = new Customer({ userId, address, phone });
      await newCustomer.save();
  
      res.status(201).json({ message: "Customer created successfully", customer: newCustomer });
    } catch (error) {
      res.status(500).json({ message: "Error creating customer", error: error.message });
    }
  };
  
  // Get all customers
  export const getCustomers = async (req, res) => {
    try {
      const customers = await Customer.find().populate("userId", "firstName lastName email");
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching customers", error: error.message });
    }
  };
  
  // Get a customer by ID
  export const getCustomerById = async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id).populate("userId", "firstName lastName email");
  
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
  
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: "Error fetching customer", error: error.message });
    }
  };
  
  // Update a customer
  export const updateCustomer = async (req, res) => {
    try {
      const { address, phone } = req.body;
  
      const updatedCustomer = await Customer.findByIdAndUpdate(
        req.params.id,
        { address, phone },
        { new: true }
      ).populate("userId", "firstName lastName email");
  
      if (!updatedCustomer) {
        return res.status(404).json({ message: "Customer not found" });
      }
  
      res.status(200).json({ message: "Customer updated successfully", customer: updatedCustomer });
    } catch (error) {
      res.status(500).json({ message: "Error updating customer", error: error.message });
    }
  };
  
  // Delete a customer
  export const deleteCustomer = async (req, res) => {
    try {
      const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
  
      if (!deletedCustomer) {
        return res.status(404).json({ message: "Customer not found" });
      }
  
      res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting customer", error: error.message });
    }
  };