import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import dotenv from "dotenv";
import bcrypt from 'bcrypt';

// Load environment variables
dotenv.config();

// Test hashing function
const testHashing = async () => {
  const password = "testpassword123";
  const salt = await bcrypt.genSalt(10);
  console.log('Salt:', salt);

  try {
    const passwordHash = await bcrypt.hash(password, salt);
    console.log('Password Hash:', passwordHash);
  } catch (error) {
    console.error('Error:', error);
  }
};

const PORT = 3001;
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log("Server is running on port 3001");
});
