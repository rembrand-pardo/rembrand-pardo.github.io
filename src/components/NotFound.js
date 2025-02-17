/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import React, { useEffect, useState } from 'react';
import '../styles/NotFound.css';
import '../styles/GradientBackground.css';
import { TextHoverEffect } from "../components/TextHoverEffect";
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebaseConfig';

function NotFound({ translations }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update isMobile state based on window width
    };

    window.addEventListener('resize', handleResize);

    // Log event when user lands on the page
    logEvent(analytics, 'page_view', { page_title: '404 Page Not Found' });

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener on unmount
    };
  }, []);

  // Handle click event for the link
  const handleLinkClick = () => {
    logEvent(analytics, 'click_not_found_link', { link_text: translations.notFoundLink });
  };

  return (
    <div className='notFound_container'>
      <div className="background-gradient" /> {/* Gradient background */}

      <section className='image_container'>
        <img src='/404.png' alt="Page Not Found" />
      </section>

      {/* Conditional rendering based on isMobile */}
      {isMobile ? (
        <div className='messageNotFound_section'>
          <p style={{ whiteSpace: 'pre-line' }}>{translations.notFoundMobile}</p>  
        </div>
      ) : (
        <>
          <div className='messageNotFound_section'>
            <p>{translations.notFound}</p>   
          </div>

          <div className='message_section'>
            {/* Responsive height and centering */}
            <div className="h-[30rem] sm:h-[25rem] xs:h-[30rem] flex items-center justify-center">
              <TextHoverEffect text={'404'} />
            </div>
          </div>
        </>
      )}

      <div className='message_container'>
        <p>{translations.notFoundMessage} <a href='/' onClick={handleLinkClick}> {translations.notFoundLink} </a></p>   
      </div>
    </div>
  );
}

export default NotFound;
