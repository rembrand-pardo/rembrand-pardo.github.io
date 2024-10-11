//../components/Policy.js
import React, { useState, useEffect } from 'react';
import '../styles/PolicyPage.css';
import '../styles/GradientBackground.css';
import DOMPurify from 'dompurify';

import { FocusCards } from '../components/FocusCards';
import InfiniteMovingCards from '../components/InfiniteMovingCards';


const ExpandableCard = ({ imageSrc, title, description, moreText, buttonText, buttonLink, isExpanded, onClick }) => {
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
            <a href={buttonLink} className="card-button">
              {buttonText}
            </a>
          </>
        )}
      </div>
    </div>
  );
};



const PolicyPage = ({ translations })  => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const [isVisible, setIsVisible] = useState(false); // New state variable
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visible to true after delay
    }, 100); // Adjust delay as needed

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


  const cards = [
    {
      title: "Zendesk: Customer Service",
      src: "/certificates/Other/certificate_other0.jpg",
    },
    {
      title: "DevOps: CI/CD",
      src: "/certificates/Other/certificate_other1.jpg",
    },
    {
      title: "Cisco Networking",
      src: "/certificates/Other/certificate_other2.jpg",
    },
    {
      title: "Cisco Foundations",
      src: "/certificates/Other/certificate_other3.jpg",
    },
    {
      title: "Human Resources",
      src: "/certificates/Recruitment/certificate_recruitment0.jpg",
    },
    {
      title: "American Staffing Association",
      src: "/certificates/Recruitment/certificate_recruitment1.jpg",
    },
    {
      title: "Human Resources",
      src: "/certificates/Recruitment/certificate_recruitment2.jpg",
    },
    {
      title: "American Staffing Association",
      src: "/certificates/Recruitment/certificate_recruitment3.jpg",
    },
    {
      title: "Human Resources: Payroll",
      src: "/certificates/Recruitment/certificate_recruitment4.jpg",
    },
    {
      title: "Human Resources Strategy",
      src: "/certificates/Recruitment/certificate_recruitment5.jpg",
    },
    {
      title: "Interviewing Candidates",
      src: "/certificates/Recruitment/certificate_recruitment6.jpg",
    },
    {
      title: "Interviewing Techniques",
      src: "/certificates/Recruitment/certificate_recruitment7.jpg",
    },
    {
      title: "HR Certification Institute",
      src: "/certificates/Recruitment/certificate_recruitment8.jpg",
    },
  ];


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
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)} 
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
                onClick={() => setExpandedIndex(expandedIndex === index + BYUData.length ? null : index + BYUData.length)} // Manage independent expansion
              />
            ))}
          </div>
        </section>


        
        <section className='infiniteMovingCards_container'>
          <InfiniteMovingCards />
        </section>

        <section className='focusCards_container'>
          <FocusCards cards={cards} />
        </section>


      </div>
    </div>
  );
};

export default PolicyPage;
