//../components/Qualifications.js
import React, { useState, useEffect } from 'react';
import '../styles/QualificationsPage.css';
import '../styles/GradientBackground.css';
import DOMPurify from 'dompurify';

import { FocusCards } from './FocusCards';
import InfiniteMovingCarousel from './InfiniteMovingCarousel';
import { cards } from '../components/CertificatesData';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebaseConfig';


const ExpandableCard = ({ imageSrc, title, description, moreText, buttonText, buttonLink, isExpanded, onClick, onButtonClick }) => {
  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={onClick}>
      <img src={imageSrc} alt={title} className={`card-image ${isExpanded ? 'expanded-image' : ''}`} />
      {!isExpanded && (
        <h3 className="card-title">{title}</h3>
      )}
      <div className={`card-content ${isExpanded ? 'expanded-content' : ''}`}>
        {isExpanded && (
          <>
            <p className="card-description">{description}</p>
            <p>{moreText}</p>
            <a 
              href={buttonLink} 
              className="card-button"
              target="_blank" 
              rel="noopener noreferrer" // Ensure security  
              onClick={onButtonClick}
            >
              {buttonText}
            </a>
          </>
        )}
      </div>
    </div>
  );
};



const QualificationsPage = ({ translations })  => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const [isVisible, setIsVisible] = useState(false); // New state variable
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visible to true after delay
    }, 130); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const BYUData = [
    {
      imageSrc: '/institutions_logos/BYU.png',
      title: translations.card1Title,
      description: translations.card1Description,
      moreText: translations.card1MoreText,
      buttonText: translations.card1ButtonText,
      buttonLink: translations.card1ButtonLink,
    },
  ];
  const SLCCData = [
    {
      imageSrc: '/institutions_logos/SLCC.png',
      title: translations.card2Title,
      description: translations.card2Description,
      moreText: translations.card2MoreText,
      buttonText: translations.card2ButtonText,
      buttonLink: translations.card2ButtonLink,
    },
  ];

  const handleCardClick = (index) => {
    const eventAction = expandedIndex === index ? 'card_collapsed' : 'card_expanded';
    logEvent(analytics, eventAction, { cardTitle: BYUData[index]?.title || SLCCData[index - BYUData.length]?.title });
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const handleButtonClick = (title) => {
    logEvent(analytics, 'button_click', { buttonTitle: title });
    console.log(`Button clicked: ${title}`);
  };


  return (
    <div className={`page-container ${isVisible ? 'visible' : ''}`}>
      <div className="background-gradient" /> {/* gradient background is for the whole page */}
      
      
      <div className="page-content">
        <section className='quote_section'>
          <h1>{translations.quoteText}</h1>
          <p>{translations.quoteAuthor}</p>
        </section>

        <section className='body_section'>
          <p>
            {translations.introductionText1}
          </p>

          <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(translations.introductionText2) }} />
        </section>

        <section className='expandableCards_section'>
          <h2>{translations.qualificationsH2}</h2>

          <div className="expandable-cards">
            {BYUData.map((card, index) => (
              <ExpandableCard
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                isExpanded={expandedIndex === index} // Check for BYU index
                onClick={() => {
                  const newIndex = expandedIndex === index ? null : index; // Manage expansion
                  setExpandedIndex(newIndex); // Update state
                  handleCardClick(index); // Handle card click
                }}
                onButtonClick={() => handleButtonClick(card.buttonText)} // Track button click
              />
            ))}

            {SLCCData.map((card, index) => (
              <ExpandableCard
                key={index + BYUData.length} // Unique key
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                isExpanded={expandedIndex === index + BYUData.length} // Check for SLCC index
                onClick={() => {
                  const newIndex = expandedIndex === index + BYUData.length ? null : index + BYUData.length; // Manage independent expansion
                  setExpandedIndex(newIndex); // Update state
                  handleCardClick(index + BYUData.length); // Handle card click correctly
                }}
                onButtonClick={() => handleButtonClick(card.buttonText)} // Track button click
              />
            ))}
          </div>

        </section>
        
        <section className='infiniteMovingCards_container'>
          <InfiniteMovingCarousel />
        </section>

        <section className='focusCards_container'>
          <FocusCards cards={cards} />
        </section>


      </div>
    </div>
  );
};

export default QualificationsPage;
