import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../Styling/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container" >
      <div className="footer-social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
};
