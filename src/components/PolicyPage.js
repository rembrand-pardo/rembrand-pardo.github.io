//../components/Policy.js

import React from 'react';
import '../styles/PolicyPage.css';
import '../styles/GradientBackground.css';


import { FocusCards } from '../components/FocusCards';
import InfiniteMovingCards from '../components/InfiniteMovingCards';



const PolicyPage = ({ translations })  => {

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
    <div className="page-container">
      <div className="background-gradient" /> {/* Apply the gradient background */}
      
      
      <div className="page-content">
        <h1>Nebula Terms of Service & Privacy Policy</h1>
        
        <section>
          <h2>Introduction</h2>
          <p>
            Thank you for choosing Nebula (“we,” “our,” or “us”). This document outlines the Terms of Service and Privacy Policy governing your use of our Progressive Web App (PWA) and associated services. By accessing or using Nebula and Nebula PWA, you agree to be bound by these terms. If you do not agree to these terms, please do not use our services.
            By using Nebula and Nebula PWA, you acknowledge and agree to these Terms of Service. Your continued use of our services signifies your acceptance of any changes or updates to these terms. If you do not agree with any part of these terms, you must discontinue use of our services immediately.
          </p>
        </section>

        <section>
          <h2>Certified by Multiple Trustworthy Organizations</h2>
          <p>
            Organizations such as Microsoft, PMP, and others have certified our practices.
          </p>
        </section>


        {/*Here implement the infinite carousel in react */}
        <section>
          <h2>Trusted Institutions</h2>
          <InfiniteMovingCards />
        </section>

        <section>
          <h2>Our Projects</h2>
          <FocusCards cards={cards} />
        </section>


      </div>
    </div>
  );
};

export default PolicyPage;
