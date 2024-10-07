import React from 'react';
import '../styles/HomePage.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import rembrandPardoImage from '../assets/rembrand_pardo_removebg.png'; // Correct import syntax
import { FlipWords } from '../components/FlipWords';
import { TypewriterEffectSmooth } from '../components/TypeWritterEffect';

function HomePage() {
  const words = ["excel.", "thrive.", "work together.", "innovate.", "unite.", "transform.", "lead.", "optimize.", "evolve.", "achieve.", "streamline.", "succeed.", "develop strategies.", "empower.", "deliver.", "focus.", "change.", "improve."];
  const typeWords = [
    { text: "Hello world!" },
  ];

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
      {/* Center the content but left-align it */}
      <div className="content-wrapper">
        {/* Typewriter effect for 'Hello world!' */}
        <div className="typewriter-container">
          <TypewriterEffectSmooth words={typeWords} />
        </div>

        {/* Small text "I am" */}
        <div className="small-text">
           I am
        </div>

        {/* Image fades in after typewriter */}
        <div className="image-container">
          <img src={rembrandPardoImage} alt="Rembrand Pardo" className="rembrand-image" />
        </div>

        {/* Flip words effect */}
        <div className="flip-words-container">
        I am dedicated to helping teams, organizations, and businesses<FlipWords words={words} />
        </div>

        {/* Learn more button with click event tracking */}
        <button className="learn-more-button" onClick={handleButtonClick}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HomePage;
