import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/r-logo.png';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

import { cn } from '../lib/utils';


const Navbar = ({ translations, setLanguage }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const location = useLocation();
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleNavClick = async (pageName) => {
    logEvent(analytics, 'navbar_click', { page: pageName });
    console.log(`Navbar clicked: ${pageName}`);

    try {
      await addDoc(collection(db, 'userActivity'), {
        event: `Navbar Clicked: ${pageName}`,
        timestamp: new Date()
      });
      console.log('Navigation activity logged successfully to Firestore.');
    } catch (error) {
      console.error('Error logging navigation activity to Firestore:', error);
    }
  };

  const handleLanguageChange = async (language) => {
    setLanguage(language);
    const languageCode = language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA';
    setCurrentLanguage(languageCode);
    
    logEvent(analytics, 'language_change', { language: languageCode });
    console.log(`Language changed to: ${languageCode}`);

    try {
      await addDoc(collection(db, 'userActivity'), {
        event: `Language Changed: ${languageCode}`,
        timestamp: new Date()
      });
      console.log('Language change activity logged successfully to Firestore.');
    } catch (error) {
      console.error('Error logging language change activity to Firestore:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-section logo-section">
          <Link to="/" onClick={() => handleNavClick('Home')} className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={`navbar-section nav-links-section ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/install" className={isActive('/install') ? 'active' : ''} onClick={() => handleNavClick('How to Install')}>
            {translations.install}
          </Link>
          <Link to="/terms" className={isActive('/terms') ? 'active' : ''} onClick={() => handleNavClick('Terms & Privacy Policy')}>
            {translations.terms}
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => handleNavClick('About')}>
            {translations.about}
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => handleNavClick('Contact')}>
            {translations.contact}
          </Link>
          <div className="mobile-only">

            {location.pathname !== '/resume' && (
            <Link to="/resume" className="resume-button" onClick={() => handleNavClick('Resume')}>
              Resume
            </Link>
            )}

            <div className="mobile-language-dropdown">
              <button className="mobile-language-button">🌐</button>
              <div className="mobile-language-options">
                <button onClick={() => handleLanguageChange('en')} className={currentLanguage === 'EN' ? 'active' : ''}>English</button>
                <button onClick={() => handleLanguageChange('es')} className={currentLanguage === 'ES' ? 'active' : ''}>Español</button>
                <button onClick={() => handleLanguageChange('ca')} className={currentLanguage === 'CA' ? 'active' : ''}>Català</button>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-right-section">
       
        {location.pathname !== '/resume' && (
          <div className="navbar-section resume-section">
            <Link
              to="/resume"
              className={cn(
                "relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-all duration-700"
              )}
              onClick={() => handleNavClick('Resume')}
            >
              {/* Animated background effect */}
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              
              {/* Button content */}
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-300 active:text-blue-400">
                Resume
              </span>
            </Link>
          </div>
        )}

          <div className="navbar-section language-section">
            <button className="language-button" onClick={() => handleNavClick('Language')}>
              🌐
            </button>
            <div className="language-dropdown">
              <button onClick={() => handleLanguageChange('en')}>English</button>
              <button onClick={() => handleLanguageChange('es')}>Español</button>
              <button onClick={() => handleLanguageChange('ca')}>Català</button>
            </div>
          </div>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;