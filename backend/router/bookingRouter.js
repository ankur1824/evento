import express from "express";
import Booking from "../models/bookingModel.js"; // Import the Booking model

const router = express.Router();

// Create a new booking
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, event, address, date } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !event || !address) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create and save booking
    const booking = new Booking({ name, email, phone, event, address, date });
    await booking.save();

    res.status(201).json({ message: "Booking created successfully!", booking });
  } catch (error) {
    res.status(500).json({ message: "Failed to create booking.", error: error.message });
  }
});

// Optional: Get all bookings (for admin or debugging purposes)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings.", error: error.message });
  }
});

export default router;
