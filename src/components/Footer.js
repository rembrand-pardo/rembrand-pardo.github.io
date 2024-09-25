import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import '../styles/Footer.css'; // Import the CSS file for the footer

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">© {currentYear} Nebula. All rights reserved.</p>
      <div className="social-icons">
      <a href="https://www.linkedin.com/in/rembrandpardo/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Thebatman7" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/rembrand.paul/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com/rembrandpardo" target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
          </a>
      </div>
    </footer>
  );
};

export default Footer;
