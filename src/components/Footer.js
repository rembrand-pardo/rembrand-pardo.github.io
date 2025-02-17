/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import React from 'react';

import { Linkedin, X, GithubThick, Instagram } from '../icons/Iconbuddy'; 

import '../styles/Footer.css';



const Footer = ({ translations }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">© {currentYear} Pardo. { translations.allRightsReserved }</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/rembrandpardo/" className="linkedin-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <Linkedin />
        </a>
        <a href="https://github.com/Thebatman7" className="github-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <GithubThick />
        </a>
        <a href="https://www.instagram.com/rembrand.paul/" className="instagram-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
          <Instagram />
        </a>
        <a href="https://x.com/rembrandpardo" className="x-icon" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Profile">
          <X />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
