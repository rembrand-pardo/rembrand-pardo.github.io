/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

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
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    onClick();
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent card expansion when clicking button
    onButtonClick();
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={handleClick}>
      <img src={imageSrc} alt={title} className={`card-image ${isExpanded ? 'expanded-image' : ''}`} />
      {!isExpanded && (
        <h3 className="card-title">{title}</h3>
      )}
      <div className={`card-content ${isExpanded ? 'expanded-content' : ''}`}>
        {isExpanded && (
          <>
            <div className="card-description">{description}</div>
            <div>{moreText}</div>
            <a 
              href={buttonLink} 
              className="card-button"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleButtonClick}
            >
              {buttonText}
            </a>
          </>
        )}
      </div>
    </div>
  );
};

const QualificationsPage = ({ translations }) => {
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 130);
    return () => clearTimeout(timer);
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
    const newExpandedCards = new Set(expandedCards);
    if (newExpandedCards.has(index)) {
      newExpandedCards.delete(index);
      logEvent(analytics, 'card_collapsed', { 
        cardTitle: index < BYUData.length ? BYUData[index].title : SLCCData[index - BYUData.length].title 
      });
    } else {
      newExpandedCards.add(index);
      logEvent(analytics, 'card_expanded', { 
        cardTitle: index < BYUData.length ? BYUData[index].title : SLCCData[index - BYUData.length].title 
      });
    }
    setExpandedCards(newExpandedCards);
  };

  const handleButtonClick = (title) => {
    logEvent(analytics, 'button_click', { buttonTitle: title });
  };

  return (
    <div className={`page-container ${isVisible ? 'visible' : ''}`}>
      <div className="background-gradient" />
      <div className="page-content">

        <section className='quote_section'>
          <h1>{translations.quoteText}</h1>
          <p>{translations.quoteAuthor}</p>
        </section>

        <section className='body_section'>
          <p>{translations.introductionText1}</p>
          <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(translations.introductionText2) }} />
        </section>

                
        <section className='expandableCards_section'>
          <h2>{translations.qualificationsH2}</h2>

          <div className="cards-container">

            <div className="card-byu">
              {BYUData.map((card, index) => (
                <ExpandableCard
                  key={index}
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                  moreText={card.moreText}
                  buttonText={card.buttonText}
                  buttonLink={card.buttonLink}
                  isExpanded={expandedCards.has(index)}
                  onClick={() => handleCardClick(index)}
                  onButtonClick={() => handleButtonClick(card.buttonText)}
                />
              ))}
            </div>
            
            <div className="card-slcc">
              {SLCCData.map((card, index) => (
                <ExpandableCard
                  key={index + BYUData.length}
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                  moreText={card.moreText}
                  buttonText={card.buttonText}
                  buttonLink={card.buttonLink}
                  isExpanded={expandedCards.has(index + BYUData.length)}
                  onClick={() => handleCardClick(index + BYUData.length)}
                  onButtonClick={() => handleButtonClick(card.buttonText)}
                />
              ))}
            </div>
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