import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  event: { type: String, required: true },
  address: { type: String, required: true }, // Added address field
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);
