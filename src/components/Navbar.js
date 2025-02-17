/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/r-logo.png';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { cn } from '../lib/utils';

import { USFlag, FlagSpain, CataloniaFlag } from '../icons/Iconbuddy'; 

const Navbar = ({ translations, setLanguage }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const [isLanguageExpanded, setIsLanguageExpanded] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
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
    setIsLanguageExpanded(false);

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

  const toggleLanguageExpansion = (e) => {
    e.stopPropagation();
    setIsLanguageExpanded(!isLanguageExpanded);
  };

  useEffect(() => {
    const closeLanguageMenu = () => setIsLanguageExpanded(false);
    document.addEventListener('click', closeLanguageMenu);
    return () => document.removeEventListener('click', closeLanguageMenu);
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''} ${location.pathname === '/resume' ? 'resume-page' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-section logo-section">
          <Link to="/" onClick={() => { handleNavClick('Home'); closeMenu(); }} className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={`navbar-section nav-links-section ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/service" className={isActive('/service') ? 'active' : ''} onClick={() => { handleNavClick('Service Page'); closeMenu(); }}>
            {translations.service}
          </Link>
          <Link to="/qualifications" className={isActive('/qualifications') ? 'active' : ''} onClick={() => { handleNavClick('Qualificationes Page'); closeMenu(); }}>
            {translations.qualifications}
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => { handleNavClick('About'); closeMenu(); }}>
            {translations.about}
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => { handleNavClick('Contact'); closeMenu(); }}>
            {translations.contact}
          </Link>

          <div className="mobile-only">
            {location.pathname !== '/resume' && (
              <Link
              to="/resume"
              className={cn(
                "relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-all duration-700"
              )}
              onClick={() => { handleNavClick('Resume'); closeMenu(); }}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-300 active:text-blue-400">
                  {translations.resume}
                </span>
              </Link>
            )}
            <div className="mobile-language-dropdown">
              <button className="mobile-language-button" onClick={toggleLanguageExpansion}>
                🌐
              </button>
              <div className={`mobile-language-options ${isLanguageExpanded ? 'expanded' : ''}`}>             
                <button onClick={() => handleLanguageChange('en')} className={currentLanguage === 'EN' ? 'active' : ''}>
                  <USFlag /> English
                </button>
                <button onClick={() => handleLanguageChange('es')} className={currentLanguage === 'ES' ? 'active' : ''}>
                  <FlagSpain /> Español
                </button>
                <button onClick={() => handleLanguageChange('ca')} className={currentLanguage === 'CA' ? 'active' : ''}>
                  <CataloniaFlag /> Català
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="navbar-right-section">
          
          <div className="navbar-section resume-section">
            <Link
              to="/resume"
              className={cn(
                "relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-all duration-700",
                location.pathname === '/resume' ? "invisible" : ""
              )}
              onClick={() => handleNavClick('Resume')}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-300 active:text-blue-400">
                {translations.resume}
              </span>
            </Link>
          </div>
         
          <div className="navbar-section language-section" onClick={(e) => e.stopPropagation()}>
            <button className="language-button" onClick={toggleLanguageExpansion}>
              🌐
            </button>
            {isLanguageExpanded && (
              <div className="language-options">
                <button onClick={() => handleLanguageChange('en')} className={currentLanguage === 'EN' ? 'active' : ''}><USFlag /></button>
                <button onClick={() => handleLanguageChange('es')} className={currentLanguage === 'ES' ? 'active' : ''}><FlagSpain /></button>
                <button onClick={() => handleLanguageChange('ca')} className={currentLanguage === 'CA' ? 'active' : ''}><CataloniaFlag /></button>
              </div>
            )}
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