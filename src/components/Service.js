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
      title: "Business",
      value: "product",
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
          <p>Product Tab</p>
        </div>
      ),
    },
    {
      title: "Technology",
      value: "services",
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
          <p>Services tab</p>
        </div>
      ),
    },
    {
      title: "Leadership",
      value: "playground",
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
          <p>Playground tab</p>
        </div>
      ),
    },
    {
      title: "Speaking",
      value: "content",
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
          <p>Content tab</p>
        </div>
      ),
    },
  ];

  const products = [
    {
      title: "Team Building Leadership",
      thumbnail:
        language === "es"
        ? "services/leadership_beam_es.png"
        : language === "ca"
        ? "services/leadership_beam_ca.png"
        : "/services/leadership_card2.png", 
    },
    {
      title: "Management Services",
      thumbnail:
        language === "es"
        ? "services/technology_beam_es.png"
        : language === "ca"
        ? "services/technology_beam_ca.png"
        : "/services/technology_card2.png",
    },
    {
      title: "Business Cunsulting Services",
      thumbnail:
        language === "es"
        ? "services/business_beam_es.png"
        : language === "ca"
        ? "services/business_beam_ca.png"
        : "/services/business_card.png",
    },
  
    {
      title: "Public Speaking Services 2",
      thumbnail:
        language === "es"
        ? "services/speaking_beam_es.png"
        : language === "ca"
        ? "services/speaking_beam_ca.png"
        : "/services/speaking_card2.png",
    },
    {
      title: "Public Speaking Services 3",
      thumbnail:
        language === "es"
        ? "services/speaking_beam_es.png"
        : language === "ca"
        ? "services/speaking_beam_ca.png"
        : "/services/business_card3.png",
    },
    {
      title: "Management Services",
      thumbnail:
        language === "es"
        ? "services/technology_beam_es.png"
        : language === "ca"
        ? "services/technology_beam_ca.png"
        : "/services/technology_card.png",
    },
  
    {
      title: "Team Building",
      thumbnail:
        language === "es"
        ? "services/leadership_beam_es.png"
        : language === "ca"
        ? "services/leadership_beam_ca.png"
        : "/services/leadership_card.png",
    },
    {
      title: "Management Services",
      thumbnail:
        language === "es"
        ? "services/technology_beam_es.png"
        : language === "ca"
        ? "services/technology_beam_ca.png"
        : "/services/technology_card3.png",
    },
    {
      title: "Business Cunsulting Services",
      thumbnail:
        language === "es"
        ? "services/business_beam_es.png"
        : language === "ca"
        ? "services/business_beam_ca.png"
        : "/services/business_card2.png",
    },
    {
      title: "Public Speaking Services",
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
      title: "COMPREHENSIVE TECHNOLOGY MANAGEMENT SERVICES",
      description: (
        <>
          <p>
          Enhance your operations with customized technology management solutions. 
          With a wealth of experience in software development, programming, software quality control, 
          and data management, I provide comprehensive project, program, and product management services.
          My expertise extends to IT management, software development leadership, data analytics, and engineering management. 
          I am dedicated to helping organizations effectively manage technology, software, and operational projects of all sizes.
          </p>
        </>
      ),
      badge: "Management",
      image:
        language === "es"
          ? "services/technology_beam_es.png"
          : language === "ca"
          ? "services/technology_beam_ca.png"
          : "services/technology_card4.png",
    },
    {
      title: "TRANSFORM YOUR BUSINESS WITH STRATEGIC CONSULTING",
      description: (
        <>
          <p>
          Elevate your business performance with comprehensive consulting services designed to drive success. 
          With a wealth of knowledge in business development, business strategy, HR and recruitment, 
          administrative operations, supervisory roles, and executive-level management consulting, 
          I aim to provide valuable insights and strategies to enhance your business operations and team dynamics.
          </p>
        </>
      ),
      badge: "Business",
      image:
        language === "es"
          ? "services/business_beam_es.png"
          : language === "ca"
          ? "services/business_beam_ca.png"
          : "services/business_card.png",
    },
    {
      title: "UNLOCK LEADERSHIP POTENTIAL AND BUILD STRONGER TEAMS",
      description: (
        <>
          <p>
          Empower your team with my leadership development and team building services. 
          I provide strategies for leadership, team unity, workgroup alignment, and employee engagement.
          My customized leadership programs and collaboration initiatives aim to nurture strong leaders and cohesive teams.
          </p>
        </>
      ),
      badge: "Leadership Training",
      image:
        language === "es"
          ? "services/leadership_beam_es.png"
          : language === "ca"
          ? "services/leadership_beam_ca.png"
          : "services/leadership_card.png",
    },
    {
      title: "INSPIRE AND ENGAGE THROUGH POWERFUL SPEAKING",
      description: (
        <>
          <p>
          Inspire your audience with dynamic speaking engagements. 
          I offer keynote, motivational, and event speaking services, 
          each tailored to align with your unique needs or event themes. 
          My goal is to captivate and empower your audience, leaving a lasting impact.
          </p>
        </>
      ),
      badge: "Public Speaking",
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
          Achieving business success requires the right strategies, strong leadership, and effective management. 
          My services are designed to help businesses and professionals excel by providing expert guidance in business strategy, 
          leadership development, and management solutions across various industries, including technology. 
          Whether you need support in optimizing operations, strengthening leadership, or driving business initiatives, 
          I offer tailored solutions to meet your unique needs. Explore the categories below to see how I can help you achieve your goals.
        </p>
      </div>



      <div className="serviceTabs_section content-spacing">     
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>


      <div className='serviceDetail_section'>
        <p className="p_text_end_page">
          My services and strategies focus on three core pillars that drive success in today’s evolving industries—business, technology, and people. 
          Strong business management ensures efficiency and growth, technology enhances decision-making and innovation, and people are the foundation 
          of every thriving organization. By aligning these key elements, I help businesses navigate challenges, strengthen leadership, 
          and optimize operations. Let’s work together to build a stronger future for your business. Contact me today to explore how we can collaborate.
        </p>
        <img 
          src= {
            language === "es"
            ? "trio_es.png"
            : language === "ca"
            ? "trio_ca.png"
            : "b_t_p.jpg"
          } 
          alt="Descriptive Alt Text" 
          className="image_end_page" 
        />
      </div>

      { /* This should only show up for mobile only */ }
      <div className='mobile_tracingBeam'>

        <section className='service_mobile_heading_section'>
          <h1>Empowering Success: <br /> Unleashing Potential, Building Leaders, Streamlining Technology, and Inspiring Change.</h1>
        </section>

        <section className='mobile_service_body_section'>
          <p>
            I am dedicated to unlocking the full potential of your business, empowering your teams, 
            streamlining your operations, and inspiring your audiences. 
            My comprehensive services are designed to transform challenges into opportunities, 
            fostering growth and success in every endeavor.
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
            Achieving business success requires the right strategies, strong leadership, and effective management. 
            My services are designed to help businesses and professionals excel by providing expert guidance in business strategy, 
            leadership development, and management solutions across various industries, including technology. 
            Whether you need support in optimizing operations, strengthening leadership, or driving business initiatives, 
            I offer tailored solutions to meet your unique needs. Explore the categories below to see how I can help you achieve your goals.
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
          <h2>Optimizing Business, Leveraging Technology, Empowering People</h2>
          <p className="mobile_p_text_end_page">
            My services and strategies focus on three core pillars that drive success in today’s evolving industries—business, technology, and people. 
            Strong business management ensures efficiency and growth, technology enhances decision-making and innovation, and people are the foundation 
            of every thriving organization. By aligning these key elements, I help businesses navigate challenges, strengthen leadership, 
            and optimize operations. Let’s work together to build a stronger future for your business. Contact me today to explore how we can collaborate.
          </p>
          <img
            src={
              language === "es"
              ? "trio_es.png"
              : language === "ca"
              ? "trio_ca.png"
              : "b_t_p.jpg" 
            }
            alt="Descriptive Alt Text" 
            className="mobile_imagae_end_image" 
          />
        </section>

      </div>
      
      
    </div>
  );
};

export default ServicePage;
