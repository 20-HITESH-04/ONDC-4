import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";

const PORT = 3001;

const app = express();



app.use(express.json());
app.use("/auth", authRoutes);



app.listen(PORT, async () => {
    await connectDB();
    console.log("Server is running on port 3001");
    }
);