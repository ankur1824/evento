import React, { useState } from "react";

const BookNow = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    address: "",
    date: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/v1/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Booking submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          event: "",
          address: "",
          date: "",
        }); // Reset form
      } else {
        alert(`Failed to submit booking: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("An error occurred while submitting the booking.");
    }
  };

  return (
    <div className="book-now-container" id="book">
      <h1>Book Your Event Now!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Your Address</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="event">Event Type</label>
          <select
            id="event"
            value={formData.event}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Choose an option
            </option>
            <option value="birthday">Birthday</option>
            <option value="wedding">Wedding</option>
            <option value="anniversary">Anniversary</option>
            <option value="camping">Camping</option>
            <option value="game_planning">Game Night</option>
            <option value="party">Party</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Event Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Book Now</button>
        </div>
      </form>
    </div>
  );
};

export default BookNow;
