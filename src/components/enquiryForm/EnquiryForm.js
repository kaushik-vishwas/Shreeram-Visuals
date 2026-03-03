import React, { useState } from 'react';
import '../enquiryForm/enquiryForm.css';

const EnquiryForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log({ name, email, message });
    onClose(); // Close the form after submission
  };

  return (
    <div className="enquiry-form-overlay">
      <div className="enquiry-form-container">
        <button className="close-button" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <h2>Quick Enquiry</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
