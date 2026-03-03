import React from 'react';
import '../contacticons/contactIcons.css'; // Ensure this CSS file is created

const ContactIcons = () => {
  return (
    <div className="contact-form">
      <div className="contact-icon-left">
        <a href="tel:+919986793055">
          <img src="/assets/images/cl.png" alt="Phone Icon" />
        </a>
      </div>

      <div className="contact-icon-right">
        <a href="https://wa.me/+919986793055">
          <img src="/assets/images/wh.png" alt="WhatsApp Icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;

