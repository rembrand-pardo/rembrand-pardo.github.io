import React from 'react';
import '../styles/AboutPage.css';
import '../styles/GradientBackground.css';

import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebaseConfig';

import rembrandPardoImage from '../assets/rembrand_pardo_removebg.png'; // Correct import syntax

const AboutPage = ({ translations })  => {
  return (
    <div className="about_page">

    <div className="background-gradient" /> {/* gradient background is for the whole page */}
    
      <div className="about_page_content">
        <section className='image_section'>
            <img>rembrandPardoImage</img>
        </section>

        <section className='body_section'>
            <p>{translations.aboutMeText1}</p>
            <p>{translations.aboutMeText2}</p>
        </section>

        <section className='quote_section'>
          <h1>{translations.quoteText}</h1>
          <p>{translations.quoteAuthor}</p>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
