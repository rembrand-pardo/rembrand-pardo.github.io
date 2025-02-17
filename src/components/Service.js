/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import React, { useEffect } from 'react';
import '../styles/Service.css';

// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../firebaseConfig';

import '../styles/GradientBackground.css';
import { HeroParallax } from "../components/HeroParallax";

// imports for mobile 
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/TracingBeam";

import { Tabs } from "../components/Tabs";


const ServicePage = ({ translations, language }) => {

  // Apply the body class when the component mounts. Used to modify this page only
  useEffect(() => {
    document.body.classList.add('servicepage-no-padding');
    return () => {
      document.body.classList.remove('servicepage-no-padding');
    };
  }, []);

  const tabs = [
    {
      title: translations.serviceTabBusinessTitle,
      value: translations.serviceTabBusinessValue,
      image:
        language === "es"
          ? "business_es.png"
          : language === "ca"
          ? "business_ca.png"
          : "business_tab_blue.png",
      text: "",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      textColor: "rgba(255, 0, 0, 0.7)",
      imageClassName: "w-[100%] h-auto object-contain",
      textPosition: "over", // "over" or "above"
      textSize: "text-lg md:text-xl", // Control text size
      textAlign: "text-center", // Control text alignment
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p> { translations.serviceTabBusinessContent } </p>
        </div>
      ),
    },
    {
      title: translations.serviceTabTechnology,
      value: translations.serviceTabTechnologyValue,
      image:
        language === "es"
        ? "tech_es.png"
        : language === "ca"
        ? "tech_ca.png"
        : "management_tab_blue.png",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      textColor: "rgba(255, 0, 0, 0.7)",
      imageClassName: "w-[100%] h-auto object-contain",
      textPosition: "over", // "over" or "above"
      textSize: "text-lg md:text-xl", // Control text size
      textAlign: "text-center", // Control text alignment
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p> { translations.serviceTabTechnologyContent } </p>
        </div>
      ),
    },
    {
      title: translations.serviceTabLeadership,
      value: translations.serviceTabLeadershipValue,
      image: 
        language === "es"
        ? "leadership_es.png"
        : language === "ca"
        ? "leadership_ca.png"
        : "leadership_tab_blue.png",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      textColor: "rgba(255, 0, 0, 0.7)",
      imageClassName: "w-[100%] h-auto object-contain",
      textPosition: "over", // "over" or "above"
      textSize: "text-lg md:text-xl", // Control text size
      textAlign: "text-center", // Control text alignment
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p> { translations.serviceTabLeadershipContent } </p>
        </div>
      ),
    },
    {
      title: translations.serviceTabSpeaking,
      value: translations.serviceTabSpeakingValue,
      image: 
        language === "es"
        ? "speaking_es.png"
        : language === "ca"
        ? "speaking_ca.png"
        : "speaking_tab_blue.png",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      textColor: "rgba(255, 0, 0, 0.7)",
      imageClassName: "w-[100%] h-auto object-contain",
      textPosition: "over", // "over" or "above"
      textSize: "text-lg md:text-xl", // Control text size
      textAlign: "text-center", // Control text alignment
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p> { translations.serviceTabSpeakingContent } </p>
        </div>
      ),
    },
  ];

  const products = [
    {
      title: translations.serviceHeroLeadershipCard,
      thumbnail:
        language === "es"
        ? "services/leadership_beam_es.png"
        : language === "ca"
        ? "services/leadership_beam_ca.png"
        : "/services/leadership_card2.png", 
    },
    {
      title: translations.serviceHeroManagementCard,
      thumbnail:
        language === "es"
        ? "services/technology_beam_es.png"
        : language === "ca"
        ? "services/technology_beam_ca.png"
        : "/services/technology_card2.png",
    },
    {
      title: translations.serviceHeroBusinessCard,
      thumbnail:
        language === "es"
        ? "services/business_beam_es.png"
        : language === "ca"
        ? "services/business_beam_ca.png"
        : "/services/business_card.png",
    },
  
    {
      title: translations.serviceHeroSpeakingCard2,
      thumbnail:
        language === "es"
        ? "services/speaking_beam_es.png"
        : language === "ca"
        ? "services/speaking_beam_ca.png"
        : "/services/speaking_card2.png",
    },
    {
      title: translations.serviceHeroSpeakingCard3,
      thumbnail:
        language === "es"
        ? "services/speaking_beam_es.png"
        : language === "ca"
        ? "services/speaking_beam_ca.png"
        : "/services/business_card3.png",
    },
    {
      title: translations.serviceHeroManagementCard2,
      thumbnail:
        language === "es"
        ? "services/technology_beam_es.png"
        : language === "ca"
        ? "services/technology_beam_ca.png"
        : "/services/technology_card.png",
    },
  
    {
      title: translations.serviceHeroLeadershipCard2,
      thumbnail:
        language === "es"
        ? "services/leadership_beam_es.png"
        : language === "ca"
        ? "services/leadership_beam_ca.png"
        : "/services/leadership_card.png",
    },
    {
      title: translations.serviceHeroManagementCard3,
      thumbnail:
        language === "es"
        ? "services/technology_beam_es.png"
        : language === "ca"
        ? "services/technology_beam_ca.png"
        : "/services/technology_card3.png",
    },
    {
      title: translations.serviceHeroBusinessCard2,
      thumbnail:
        language === "es"
        ? "services/business_beam_es.png"
        : language === "ca"
        ? "services/business_beam_ca.png"
        : "/services/business_card2.png",
    },
    {
      title: translations.serviceHeroSpeakingCard4,
      thumbnail:
        language === "es"
        ? "services/speaking_beam_es.png"
        : language === "ca"
        ? "services/speaking_beam_ca.png"
        : "/services/speaking_card3.png",
    },
  ];

  //tracing beam for mobile
  const serviceContent = [
    {
      title: translations.serviceManagementBeamTitle,
      description: (
        <>
          <p>
          { translations.serviceManagementBeamDescription }
          </p>
        </>
      ),
      badge: translations.serviceManagementBeamBadge,
      image:
        language === "es"
          ? "services/technology_beam_es.png"
          : language === "ca"
          ? "services/technology_beam_ca.png"
          : "services/technology_card4.png",
    },
    {
      title: translations.serviceBusinessBeamTitle,
      description: (
        <>
          <p>
          { translations.serviceBusinessBeamDescription }
          </p>
        </>
      ),
      badge: translations.serviceBusinessBeamBadge,
      image:
        language === "es"
          ? "services/business_beam_es.png"
          : language === "ca"
          ? "services/business_beam_ca.png"
          : "services/business_card.png",
    },
    {
      title: translations.serviceLeadershipBeamTitle,
      description: (
        <>
          <p>
          { translations.serviceLeadershipBeamDescription }
          </p>
        </>
      ),
      badge: translations.serviceLeadershipBeamBadge,
      image:
        language === "es"
          ? "services/leadership_beam_es.png"
          : language === "ca"
          ? "services/leadership_beam_ca.png"
          : "services/leadership_card.png",
    },
    {
      title: translations.serviceSpeakingBeamTitle,
      description: (
        <>
          <p>
          { translations.serviceSpeakingBeamDescription }
          </p>
        </>
      ),
      badge: translations.serviceSpeakingBeamBadge,
      image:
        language === "es"
          ? "services/speaking_beam_es.png"
          : language === "ca"
          ? "services/speaking_beam_ca.png"
          : "services/speaking_card_m.png",   
    },
  ];

  return (
    <div className="servicepage">

      <div className="background-gradient" /> {/* Apply the gradient background */}

      <div className="service_container">
        <HeroParallax products={products} translations={translations}/>
      </div>


      <div className="centered-image-text-section">
        <img 
          src={
            language === "es"
            ? "general_es.png"
            : language === "ca"
            ? "general_ca.png"
            : "general_service_card.png" 
          }
          alt="Descriptive Alt Text" 
          className="centered-image" 
        />
        <p className="centered-text">
          { translations.serviceCenterText }
        </p>
      </div>



      <div className="serviceTabs_section content-spacing">     
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>


      <div className='serviceDetail_section'>
        <p className="p_text_end_page">
          { translations.serviceTrioEndText }
        </p>

        <div className="serviceDetailImageContainer">
          <a href="#/about">
            <img 
              src= {
                language === "es"
                ? "trio_es.png"
                : language === "ca"
                ? "trio_ca.png"
                : "b_t_p.jpg"
              } 
              alt="Management of People, Technology and Business." 
              className="image_end_page" 
            />
          </a>
        </div>
        
      </div>

      { /* This should only show up for mobile only */ }
      <div className='mobile_tracingBeam'>

        <section className='service_mobile_heading_section'>
          <h1> { translations.serviceMainHeading } </h1>
        </section>

        <section className='mobile_service_body_section'>
          <p>
          { translations.serviceSubheading }
          </p>
        </section>

        <div className="mobile_centered-image-text-section">
          <img 
            src={
              language === "es"
              ? "general_es.png"
              : language === "ca"
              ? "general_ca.png"
              : "general_blue.png" 
            }
            alt="Descriptive Alt Text" 
            className="mobile_centered_image" 
          />
          <p className="mobile_centered_text">
            { translations.serviceCenterText }
          </p>
        </div>
        
        <section className='m_tracingBeam_section'>
          <TracingBeam className="mobile_tracingBeam_section px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {serviceContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>
      
                  <>
                    <p className={twMerge("tracing_beam_subheading", "mb-4")}>
                      {item.title}
                    </p>
                  </>
      
                  <div className="text-sm prose prose-sm dark:prose-invert">
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
        
        <section className='mobile_service_end_page'>
          <h2> { translations.serviceTrioEndHeadingMobile } </h2>
          <p className="mobile_p_text_end_page">
            { translations.serviceTrioEndText }
          </p>
          <div className="mobileImageEndContainer">
            <a href="#/about">
              <img
                src={
                  language === "es"
                  ? "trio_es.png"
                  : language === "ca"
                  ? "trio_ca.png"
                  : "b_t_p.jpg" 
                }
                alt="Learn more about me and my approach to managing people, technology, and business." 
                className="mobile_image_end_image" 
              />
            </a>
          </div>
        </section>

      </div>
      
      
    </div>
  );
};

export default ServicePage;
