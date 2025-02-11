import React from 'react';
import '../styles/HomePage.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import rembrandPardoImage from '../assets/rembrand_pardo_removebg.png';
import { FlipWords } from '../components/FlipWords';
import { TypewriterEffectSmooth } from '../components/TypeWritterEffect';
import { HoverBorderGradient } from "../components/HoverBorderGradient";

import '../styles/GradientBackground.css';


import { motion } from 'framer-motion'; 

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
        <motion.div
          className="small-text"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }} // Start with blur and small scale
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} // Smoothly fade in, remove blur, and scale up
          transition={{ duration: 1.5, ease: "easeOut", delay: 2.9 }} // Adjust timing for smooth effect, 3-second delay
        >
          {translations.iAm}
        </motion.div>

        {/* Image fades in after typewriter with tech-like effect */}
        <motion.div 
          className="image-container"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }} // Start with blur and small scale
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} // Smoothly fade in, remove blur, and scale up
          transition={{ duration: 1.5, ease: "easeOut", delay: 3.5 }} // Adjust timing for smooth effect, 3-second delay
        >
          <img src={rembrandPardoImage} alt="Rembrand Pardo" className="rembrand-image" />
        </motion.div>

        {/* Flip words effect */}
        <motion.div 
          className="flip-words-container"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }} // Start with blur and small scale
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} // Smoothly fade in, remove blur, and scale up
          transition={{ duration: 1.5, ease: "easeOut", delay: 5.5 }} // Adjust timing for smooth effect, 3-second delay
        >
          {translations.introText}<FlipWords words={translations.changingWords} />
        </motion.div>


        <motion.div 
          className="learn-more-button bg-transparent flex justify-start text-left"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }} // Start with blur and small scale
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} // Smoothly fade in, remove blur, and scale up
          transition={{ duration: 1.5, ease: "easeOut", delay: 6 }} // Adjust timing for smooth effect, 3-second delay
        >
          <a href="#/service"> 
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-transparent text-white flex items-center space-x-2"
              onClick={handleButtonClick}
            >
              <span>{translations.learnMore}</span>
            </HoverBorderGradient>
          </a>
        </motion.div>

      </div>
    </div>
  );
}

export default HomePage;
