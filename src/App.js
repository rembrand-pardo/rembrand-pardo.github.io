import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeToInstallPage from './components/HowToInstallPage';
import PolicyPage from './components/PolicyPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NotFound from './components/NotFound';
import './styles/App.css';
import CookieConsent from './components/CookieConsent'; 
import Footer from './components/Footer.js';

function App() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out transition
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
      {!consentGiven && <CookieConsent onConsent={() => setConsentGiven(true)} />}

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
          <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/install" element={<HomeToInstallPage />} />
              <Route path="/terms" element={<PolicyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
