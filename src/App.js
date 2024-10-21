import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeToInstallPage from './components/HowToInstallPage';
import QualificationsPage from './components/QualificationsPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ResumePage from './components/ResumePage';
import NotFound from './components/NotFound';
import './styles/App.css';
import CookieConsent from './components/CookieConsent'; 
import Footer from './components/Footer.js';

import translations from '../src/assets/locales/translations.js'; // Import translations

function App() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out transition
  
  const [language, setLanguage] = useState('en'); // Default language
  
  const location = useLocation();

  // Show intro when on the home page
  React.useEffect(() => {
    if (location.pathname === '/') {
      setShowIntro(true);
    } else {
      setShowIntro(false);
    }
  }, [location]);

  const handleVideoEnd = () => {
    setFadeOut(true); // Start fading out
    setTimeout(() => {
      setShowIntro(false); // Stop showing the video after fade out
      setFadeOut(false); // Reset fade-out state
    }, 1000); // Duration of the fade-out effect
  };

  return (
    <div className={`app-container ${fadeOut ? 'fade-out' : ''}`}>
      {!consentGiven && <CookieConsent onConsent={() => setConsentGiven(true)} language={language} />}

      {showIntro ? (
        <div className="intro-video-container">
          <video 
            src={process.env.PUBLIC_URL + '/intro.mp4'}
            autoPlay 
            muted 
            playsInline
            onEnded={handleVideoEnd}
            className="intro-video"
          >
            <source src={process.env.PUBLIC_URL + '/intro.mp4'} type="video/mp4" />
            <source src={process.env.PUBLIC_URL + '/intro.webm'} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <>
          <Navbar translations={translations[language]} setLanguage={setLanguage} /> {/* Pass translations to Navbar */}
            <Routes>
              <Route path="/" element={<HomePage translations={translations[language]} />} /> {/* Pass translations */}
              <Route path="/install" element={<HomeToInstallPage translations={translations[language]} />} />
              <Route path="/qualifications" element={<QualificationsPage translations={translations[language]} />} />
              <Route path="/about" element={<AboutPage translations={translations[language]} />} />
              <Route path="/contact" element={<ContactPage translations={translations[language]} />} />
              <Route path="/resume" element={<ResumePage translations={translations[language]} language={language}/>} />
              <Route path="*" element={<NotFound translations={translations[language]} />} />
            </Routes>
          {/* Conditionally render Footer */}
          {location.pathname !== '/contact' && <Footer />} {/* Hide footer on /contact page */}
        </>
      )}
    </div>
  );
}

export default App;
