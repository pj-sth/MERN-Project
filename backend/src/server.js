import express from "express"; // in package.json type should be module to use this 
// const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware for handling incoming request bodies that contain JSON data.
app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);

// app.use((req, res, next) => {
//     console.log(`Request method is ${req.method} & Request URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});
