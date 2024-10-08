import React from 'react';
import '../styles/HomePage.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import rembrandPardoImage from '../assets/rembrand_pardo_removebg.png'; // Correct import syntax
import { FlipWords } from '../components/FlipWords';
import { TypewriterEffectSmooth } from '../components/TypeWritterEffect';
import { HoverBorderGradient } from "../components/HoverBorderGradient";

import '../styles/GradientBackground.css'; 

function HomePage( {translations }) {

  const handleButtonClick = async () => {
    console.log("Learn More button clicked");
    await logUserActivity("Home Page Learn More button clicked");
  };

  const logUserActivity = async (activity) => {
    const timestamp = new Date();
    try {
      await addDoc(collection(db, 'userActivity'), {
        event: activity,
        timestamp
      });
      console.log('User activity logged successfully.');
    } catch (error) {
      console.error('Error logging user activity:', error);
    }
  };

  return (
    <div className="homepage">

      <div className="background-gradient" /> {/* Apply the gradient background */}
      
      {/* Center the content but left-align it */}
      <div className="content-wrapper">
        {/* Typewriter effect for 'Hello world!' */}
        <div className="typewriter-container">
          <TypewriterEffectSmooth words={[{text: translations.helloWorld}]} />
        </div>

        {/* Small text "I am" */}
        <div className="small-text">
           {translations.iAm}
        </div>

        {/* Image fades in after typewriter */}
        <div className="image-container">
          <img src={rembrandPardoImage} alt="Rembrand Pardo" className="rembrand-image" />
        </div>

        {/* Flip words effect */}
        <div className="flip-words-container">
          {translations.introText}<FlipWords words={translations.changingWords} />
        </div>

        <div className="learn-more-button bg-transparent flex justify-start text-left">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-transparent text-white flex items-center space-x-2"
            onClick={handleButtonClick}
          >
            <span>{translations.learnMore}</span>
          </HoverBorderGradient>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
