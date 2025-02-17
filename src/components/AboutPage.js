/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

//../components/AboutPage.js
import React, { useState, useEffect } from 'react';
import '../styles/AboutPage.css';
import '../styles/GradientBackground.css';

// import { logEvent } from 'firebase/analytics';
// import { analytics } from '../firebaseConfig';

import { TextHoverEffect } from "../components/TextHoverEffect";


import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/TracingBeam";


const AboutPage = ({ translations, language })  => {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visible to true after delay
    }, 140); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const aboutContent = [
    {
      title: translations.pardoFamilyTitle,
      description: translations.pardoFamilyDescription,
      badge: translations.pardoFamilyMottoBadge, 
      image:
      language === "es"
        ? "crest_es.png"
        : language === "ca"
        ? "crest_ca.png"
        : "pardo_crest_no_motto.jpg",
    },
    {
      title: translations.calculatedRisksTitle,
      description: translations.calculatedRisksDescription,
      badge: translations.calculatedRisksBadge,
      image: "adventures.jpg",
    },
    {
      title: translations.steppingIntoRolesTitle,
      description: translations.steppingIntoRolesDescription,
      badge: translations.steppingIntoRolesBadge,
      image: "acting.jpg",
    },
    {
      title: translations.endlessLearningTitle,
      description: translations.endlessLearningDescription,
      badge: translations.endlessLearningBadge, 
      image: "books.png",
    },
  ];


  return (
    <div className={`about_page ${isVisible ? 'visible' : ''}`}>

      <div className="background-gradient" /> {/* gradient background is for the whole page */}
    
      <div className="about_page_content">

        <section className='about_heading_section'>
          <h1>{translations.about_heading}</h1>
        </section>

        <section className='body_section'>
          <p>{translations.aboutMeText1}</p>
          <p>{translations.aboutMeText2}</p>
        </section>

        <section className='secondHeading_section'>
          {/* Make the height and flexbox properties responsive */}
          <div className="h-[10rem] sm:h-[8rem] xs:h-[6rem] flex items-center justify-center">
            <TextHoverEffect text={translations.myPassions} />
          </div>
        </section>



        <section className='tracingBeam_section'>
          
          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {aboutContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>
      
                  <p className={twMerge("mb-4")}>
                    {item.title}
                  </p>

                  <div className="text-sm  prose prose-sm dark:prose-invert">
                    {item?.image && (
                      <img
                        src={item.image}
                        alt="blog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover"
                      />
                    )}
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>

        </section>

        <section className='about_end_page'>

          {translations.aboutEndPage}

        </section>

      </div>
    </div>
  );
};

export default AboutPage;
