// src/components/Footer/Footer.jsx

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">Green Bite</h3>
          <p className="footer-description">Your all-in-one online store for food, groceries, skincare, and more.</p>
          <div className="social-icons">
            <a href="/" aria-label="Facebook"><FaFacebook /></a>
            <a href="/" aria-label="Instagram"><FaInstagram /></a>
            <a href="/" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul className="footer-links">
            <li><a href="/">Food</a></li>
            <li><a href="/">Groceries</a></li>
            <li><a href="/">Skincare</a></li>
            <li><a href="/">Electronics</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> 123 Green Street, Eco City</li>
            <li><FaPhone /> (123) 456-7890</li>
            <li><FaEnvelope /> info@greenbite.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Green Bite. All rights reserved.</p>
        <div className="legal-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Shipping Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
