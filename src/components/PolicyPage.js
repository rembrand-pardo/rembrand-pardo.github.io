import React from 'react';
import '../styles/PolicyPage.css';
import '../styles/GradientBackground.css';
import ParallaxScroll from '../components/ParallaxScroll';
import { InfiniteMovingCards } from "../components/Infinite-moving-cards";

const PolicyPage = () => {
  const testimonials = [
    {
      image: "/path/to/image1.jpg",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      image: "/path/to/image1.jpg",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      image: "/path/to/image1.jpg",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      image: "/path/to/image1.jpg",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      image: "/path/to/image1.jpg",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    // Add more images as needed
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

        <div className="testimonial-container h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <ParallaxScroll images={images} />
      </div>
    </div>
  );
};

export default PolicyPage;
