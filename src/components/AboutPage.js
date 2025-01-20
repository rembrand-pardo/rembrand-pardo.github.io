//../components/AboutPage.js
import React, { useState, useEffect } from 'react';
import '../styles/AboutPage.css';
import '../styles/GradientBackground.css';

// import { logEvent } from 'firebase/analytics';
// import { analytics } from '../firebaseConfig';

import { TextHoverEffect } from "../components/TextHoverEffect";


import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/TracingBeam";
import { Tabs } from "../components/Tabs";


const AboutPage = ({ translations })  => {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visible to true after delay
    }, 140); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const tabs = [
    {
      title: "Business",
      value: "product",
      image: "business_tab.png",
      text: "",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      textColor: "rgba(255, 0, 0, 0.7)",
      imageClassName: "w-[100%] h-auto object-contain",
      textPosition: "over", // "over" or "above"
      textSize: "text-lg md:text-xl", // Control text size
      textAlign: "text-center", // Control text alignment
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      image: "r_p.JPEG",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      image: "Rembrand-logo.png",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      image: "pardo_crest_only_rm.png",
      text: "This is the prodct text for the Product tab. It will appear over the image.",
      backgroundColor: "rgba(255, 255, 255, 1)",
      textColor: "rgba(255, 0, 0, 0.7)",
      imageClassName: "w-[60%] h-auto object-contain",
      textPosition: "above", // "over" or "above"
      textSize: "text-lg md:text-xl", // Control text size
      textAlign: "text-center", // Control text alignment
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
        </div>
      ),
    },
  ];

  const aboutContent = [
    {
      title: translations.pardoFamilyTitle,
      description: (
        <>
          <p>{translations.pardoFamilyDescription}</p>
        </>
      ),
      badge: translations.pardoFamilyMottoBadge, 
      image:
        "pardo_crest_no_motto.jpg",
    },
    {
      title: translations.calculatedRisksTitle,
      description: (
        <>
          <p>{translations.calculatedRisksDescription}</p>
        </>
      ),
      badge: translations.calculatedRisksBadge,
      image:
        "adventures.jpg",
    },
    {
      title: translations.steppingIntoRolesTitle,
      description: (
        <>
          <p>{translations.steppingIntoRolesDescription}</p>
        </>
      ),
      badge: translations.steppingIntoRolesBadge,
      image:
        "acting.jpg",
    },
    {
      title: translations.endlessLearningTitle,
      description: (
        <>
          <p>{translations.endlessLearningDescription}</p>
        </>
      ),
      badge: translations.endlessLearningBadge, 
      image:
        "books.png",
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
      
                  <p className={twMerge("text-xl mb-4")}>
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

        <section className='tabs_section'>
          
          <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
