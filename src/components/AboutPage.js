//../components/AboutPage.js
import React, { useState, useEffect } from 'react';
import '../styles/AboutPage.css';
import '../styles/GradientBackground.css';

// import { logEvent } from 'firebase/analytics';
// import { analytics } from '../firebaseConfig';

import rembrandPardoImage from '../assets/rembrand_pardo_removebg.png';
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
      title: "Product",
      value: "product",
      image: "pardo.JPEG",
      text: "This is the prodct text for the Product tab. It will appear over the image.",
      backgroundColor: "rgba(255, 0, 0, 0.7)",
      textColor: "rgba(255, 0, 0, 0.7)",
      imageClassName: "w-[70%] h-auto object-contain",
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
      image: "pardo_crest_rm.png",
      text: "This is the prodct text for the Product tab. It will appear over the image.",
      backgroundColor: "rgba(255, 255, 255, 1)",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
        </div>
      ),
    },
  ];


  return (
    <div className={`about_page ${isVisible ? 'visible' : ''}`}>

      <div className="background-gradient" /> {/* gradient background is for the whole page */}
    
      <div className="about_page_content">
        <section className='image_section'>
          <img src={rembrandPardoImage} alt="Rembrand Pardo" />
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
              {dummyContent.map((item, index) => (
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

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Hello! My name is Rembrand Paul Pardo and I am from Barcelona, Spain.
          I enjoy learning new things and finding new ways of doing things. Currently, I am studying Software Engineering at BYU.
          Prior to this, I studied at Salt Lake Community College (SLCC) where I finished an Associate's degree in Business.
          The world of business has always been a passion of mine because I like people and numbers.
        </p>
        <p>
          Software Engineering has become another passion of mine. 
          I love how I can create new things with just lines of code. There are not limits to what programming can create.
          I have learned that with computer-programming it is not always about what I know,
          but what and how I can figure out what I don't know. Explore my website to find out more about what I have learned and done with programming.
        </p>
      </>
    ),
    badge: "React",
    image:
      "/services/blue_speaking_ser.jpg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          
        </p>
        <p>
          This is a test. We are adding more text to the description but this timer
          it is in engilsh. We are not sure what to say here at the moment. We need improvement.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default AboutPage;
