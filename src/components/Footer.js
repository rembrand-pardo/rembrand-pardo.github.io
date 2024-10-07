import React from 'react';

import { Linkedin, X, GithubThick, Instagram } from '../icons/Iconbuddy'; 

import '../styles/Footer.css';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">© {currentYear} All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/rembrandpardo/" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
        <a href="https://github.com/Thebatman7" className="github-icon" target="_blank" rel="noopener noreferrer">
          <GithubThick />
        </a>
        <a href="https://www.instagram.com/rembrand.paul/" className="instagram-icon" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
        <a href="https://x.com/rembrandpardo" className="x-icon" target="_blank" rel="noopener noreferrer">
          <X />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
