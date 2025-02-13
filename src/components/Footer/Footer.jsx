import React from 'react';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h4>About EduSity</h4>
          <p>
            EduSity is dedicated to providing top-notch education in technology. We offer a variety of programs that help students stay ahead in the ever-evolving digital landscape.
            Become part of the EduSit community and unlock your full potential!
          </p>
        </div>

        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: <a href="mailto:support@edusit.com">support@edusity.com</a></li>
            <li>Phone: <a href="tel:+19876543210">+1 987-654-3210</a></li>
            <li>Address: 123 EduSity Lane, San Francisco, CA 94105, USA</li>
          </ul>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>&copy; 2024 EduSity Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
