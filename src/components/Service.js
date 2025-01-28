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


const ServicePage = ({ translations }) => {

  // Apply the body class when the component mounts. Used to modify this page only
  useEffect(() => {
    document.body.classList.add('servicepage-no-padding');
    return () => {
      document.body.classList.remove('servicepage-no-padding');
    };
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
      title: "Technology",
      value: "services",
      image: "technology_tab.png",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      textColor: "rgba(255, 0, 0, 0.7)",
      imageClassName: "w-[100%] h-auto object-contain",
      textPosition: "over", // "over" or "above"
      textSize: "text-lg md:text-xl", // Control text size
      textAlign: "text-center", // Control text alignment
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
        </div>
      ),
    },
    {
      title: "Leadership",
      value: "playground",
      image: "leadership_tab.png",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      textColor: "rgba(255, 0, 0, 0.7)",
      imageClassName: "w-[100%] h-auto object-contain",
      textPosition: "over", // "over" or "above"
      textSize: "text-lg md:text-xl", // Control text size
      textAlign: "text-center", // Control text alignment
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
        </div>
      ),
    },
    {
      title: "Speaking",
      value: "content",
      image: "speaking_tab.png",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      textColor: "rgba(255, 0, 0, 0.7)",
      imageClassName: "w-[100%] h-auto object-contain",
      textPosition: "over", // "over" or "above"
      textSize: "text-lg md:text-xl", // Control text size
      textAlign: "text-center", // Control text alignment
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
        </div>
      ),
    },
  ];

  return (
    <div className="servicepage">

      <div className="background-gradient" /> {/* Apply the gradient background */}

      <div className="service_container">
        <HeroParallax products={products} />
      </div>


      {/* New Section */}
      <div className="centered-image-text-section">
        <img 
          src="general_service_card.png" 
          alt="Descriptive Alt Text" 
          className="centered-image" 
        />
        <p className="centered-text">
          Empowering Businesses, Inspiring Change.
        </p>
      </div>



      <div className="serviceTabs_section content-spacing">     
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>


      <div className='serviceDetail_section'>
        <p>{translations.aboutMeText1}</p>
        <p>{translations.aboutMeText2}</p>
      </div>

      { /* This should only show up for mobile only */ }
      <div className='mobile_tracingBeam'>

        <section className='service_mobile_heading_section'>
          <h1>Empowering Success: <br /> Unleashing Potential, Building Leaders, Streamlining Technology, and Inspiring Change.</h1>
        </section>

        <section className='service_body_section'>
          <p>
            I am dedicated to unlocking the full potential of your business, empowering your teams, 
            streamlining your operations, and inspiring your audiences. 
            My comprehensive services are designed to transform challenges into opportunities, 
            fostering growth and success in every endeavor.
          </p>
        </section>
        
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {serviceContent.map((item, index) => (
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


      </div>
      
      
    </div>
  );
};


export const products = [
  {
    title: "Team Building Leadership",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/services/leadership_card2.png",
  },
  {
    title: "Management Services",
    link: "https://cursor.so",
    thumbnail:
      "/services/technology_card2.png",
  },
  {
    title: "Business Cunsulting Services",
    link: "https://userogue.com",
    thumbnail:
      "/services/business_card.png",
  },

  {
    title: "Public Speaking Services",
    link: "https://editorially.org",
    thumbnail:
      "/services/speaking_card2.png",
  },
  {
    title: "Public Speaking Services",
    link: "https://editrix.ai",
    thumbnail:
      "/services/business_card3.png",
  },
  {
    title: "Management Services",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/services/technology_card.png",
  },

  {
    title: "Team Building",
    link: "https://algochurn.com",
    thumbnail:
      "/services/leadership_card.png",
  },
  {
    title: "Management Services",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/services/technology_card3.png",
  },
  {
    title: "Business Cunsulting Services",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/services/business_card2.png",
  },
  {
    title: "Public Speaking Services",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/services/speaking_card3.png",
  },
  // {
  //   title: "Renderwork Studio",
  //   link: "https://renderwork.studio",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  // },

  // {
  //   title: "Creme Digital",
  //   link: "https://cremedigital.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  // },
  // {
  //   title: "Golden Bells Academy",
  //   link: "https://goldenbellsacademy.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  // },
  // {
  //   title: "Invoker Labs",
  //   link: "https://invoker.lol",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  // },
  // {
  //   title: "E Free Invoice",
  //   link: "https://efreeinvoice.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  // },
];

//tracing beam
const serviceContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
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
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
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


export default ServicePage;
