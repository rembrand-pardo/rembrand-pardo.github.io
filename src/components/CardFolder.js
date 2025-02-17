/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import React, { useState } from "react";
import { CiFolderOn } from "react-icons/ci"; // Closed folder icon
import { PiFolderOpenThin } from "react-icons/pi"; // Open folder icon
import "../styles/CardFolder.css";

const CardFolder = ({ title, description, link }) => {
  // State to control card hover
  const [isCardHovered, setIsCardHovered] = useState(false);
  // State to control folder icon hover
  const [isFolderHovered, setIsFolderHovered] = useState(false);

  return (
    <div
      className={`card ${isCardHovered ? "card-hover" : ""}`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      {/* Only the folder icon is clickable */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="folder-icon"
        onMouseEnter={() => setIsFolderHovered(true)}
        onMouseLeave={() => setIsFolderHovered(false)}
      >
        {/* Show the folder icon based on the folder hover state */}
        {isFolderHovered ? (
          <PiFolderOpenThin className="folder-img" />
        ) : (
          <CiFolderOn className="folder-img" />
        )}
      </a>
    </div>
  );
};

export default CardFolder;
