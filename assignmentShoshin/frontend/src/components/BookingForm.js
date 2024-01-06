// components/BookingForm.js
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const BookingForm = () => {
  const { selectedService, createBooking } = useContext(AppContext);
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');

  const handleBookingSubmit = () => {
    if (selectedService && userName && date) {
      createBooking(selectedService.id, userName, date);
      // Optionally, reset the form or perform other actions
    } else {
      console.error('Please fill in all booking details.');
    }
  };

  return (
    <div className="booking-form">
      <h2>Book Appointment</h2>
      {selectedService && (
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={handleBookingSubmit}>Book Appointment</button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
