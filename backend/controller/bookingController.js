import Booking from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
  try {
    const { name, email, phone, event, address, date } = req.body;

    if (!name || !email || !phone || !event || !address) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const booking = await Booking.create({
      name,
      email,
      phone,
      event,
      address,
      date,
    });

    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
