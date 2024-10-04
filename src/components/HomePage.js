import React, { useRef } from 'react';
import '../styles/HomePage.css';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';


import '../styles/GradientBackground.css'; // Import the gradient background CSS

function HomePage() {
  

  const handleCardClick = (info) => {
    console.log(`Card clicked: ${info}`);
    logUserActivity(`Card Clicked: ${info}`);
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
  

      
    </div>

  );
}

export default HomePage;