import React from 'react';
import '../styles/InfiniteMovingCarousel.css';

const InfiniteMovingCards = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* First set of logos */}
        <img src="/institutions_logos/Microsoft.png" alt="Institution Logo 1" />
        <img src="/institutions_logos/PMI.png" alt="Institution Logo 2" />
        <img src="/institutions_logos/CFI.png" alt="Institution Logo 3" />
        <img src="/institutions_logos/CPE.png" alt="Institution Logo 4" />
        <img src="/institutions_logos/EEP.png" alt="Institution Logo 5" />
        <img src="/institutions_logos/Hrci.png" alt="Institution Logo 6" />
        <img src="/institutions_logos/LinkedInLearning.png" alt="Institution Logo 7" />
        <img src="/institutions_logos/Zendesk.png" alt="Institution Logo 8" />
        <img src="/institutions_logos/Atlassian.png" alt="Institution Logo 9" />
        <img src="/institutions_logos/BYU.png" alt="Institution Logo 10" />
        <img src="/institutions_logos/SLCC.png" alt="Institution Logo 11" />
        {/* Duplicate logos for seamless effect */}
        <img src="/institutions_logos/Microsoft.png" alt="Institution Logo 1" />
        <img src="/institutions_logos/PMI.png" alt="Institution Logo 2" />
        <img src="/institutions_logos/CFI.png" alt="Institution Logo 3" />
        <img src="/institutions_logos/CPE.png" alt="Institution Logo 4" />
        <img src="/institutions_logos/EEP.png" alt="Institution Logo 5" />
        <img src="/institutions_logos/Hrci.png" alt="Institution Logo 6" />
        <img src="/institutions_logos/LinkedInLearning.png" alt="Institution Logo 7" />
        <img src="/institutions_logos/Zendesk.png" alt="Institution Logo 8" />
        <img src="/institutions_logos/Atlassian.png" alt="Institution Logo 9" />
        <img src="/institutions_logos/BYU.png" alt="Institution Logo 10" />
        <img src="/institutions_logos/SLCC.png" alt="Institution Logo 11" />
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
