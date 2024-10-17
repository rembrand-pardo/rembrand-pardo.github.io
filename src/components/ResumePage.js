//../components/ResumePage.js
import React, { useState, useEffect } from 'react';
import '../styles/ResumePage.css';
import '../styles/GradientBackground.css';

// import { logEvent } from 'firebase/analytics';
// import { analytics } from '../firebaseConfig';

import rembrandPardoImage from '../assets/rembrand_pardo_removebg.png';








const ResumePage = ({ translations })  => {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visible to true after delay
    }, 140); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);



  return (
    <div className={`resume_page ${isVisible ? 'visible' : ''}`}>

      <div className="background-gradient" /> {/* gradient background is for the whole page */}
    
      <div className="resume_page_content">

        <section className='image_section'>
          <img src={rembrandPardoImage} alt="Rembrand Pardo" />
        </section>
        
        <section className='body_section'>
          <p>{translations.aboutMeText1}</p>
          <p>{translations.aboutMeText2}</p>
        </section>

        <section className='secondHeading_section'>
          {/* Make the height and flexbox properties responsive */}
          <div className="h-[10rem] sm:h-[8rem] xs:h-[6rem] flex items-center justify-center">
            
          </div>
        </section>



      </div>
    </div>
  );
};

export default ResumePage;
