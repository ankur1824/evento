import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import bookingRouter from "./router/bookingRouter.js"; // Import booking router
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });

// Enable CORS
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST"], // Allow GET for fetching and POST for storing data
    credentials: true,
  })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/bookings", bookingRouter); // Add booking API endpoint

// Connect to the database
dbConnection();

export default app;
