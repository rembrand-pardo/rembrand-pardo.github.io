/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import React, { useEffect } from 'react';
import '../styles/InfiniteMovingCarousel.css';

const imagePaths = [
  "/institutions_logos/Microsoft.png",
  "/institutions_logos/PMI.png",
  "/institutions_logos/CFI.png",
  "/institutions_logos/CPE.png",
  "/institutions_logos/EEP.png",
  "/institutions_logos/Hrci.png",
  "/institutions_logos/LinkedInLearning.png",
  "/institutions_logos/Zendesk.png",
  "/institutions_logos/Atlassian.png",
  "/institutions_logos/BYU.png",
  "/institutions_logos/SLCC.png"
];

const InfiniteMovingCards = () => {
  useEffect(() => {
    // Preload all images
    imagePaths.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {imagePaths.map((src, index) => (
          <img key={index} src={src} alt={`Institution Logo ${index + 1}`} />
        ))}
        {/* Duplicate logos for seamless effect */}
        {imagePaths.map((src, index) => (
          <img key={index + imagePaths.length} src={src} alt={`Institution Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
