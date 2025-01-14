import express from "express";
import connectDB from "./config/db.js";

const PORT = 3001;

const app = express();







app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port 3000");
    }
);