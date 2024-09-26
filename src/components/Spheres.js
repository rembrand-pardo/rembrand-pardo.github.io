import React, { useEffect, useState } from 'react';
import '../styles/Spheres.css';

/* global TagCloud */ // Inform ESLint that TagCloud is a global variable

const App = () => {
  const [leftSpeed, setLeftSpeed] = useState('normal');
  const [rightSpeed, setRightSpeed] = useState('normal');

  useEffect(() => {
    // Dynamically load TagCloud library from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Tags for the left sphere
      const leftTags = [
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'Python', 'Java', 'git',
        'Node.js', 'OpenCV', 'GCP',
        'MySQL', 'jQuery'
      ];

      // Tags for the right sphere
      const rightTags = [
        'Redux', 'Bootstrap', 'Tailwind',
        'TypeScript', 'GraphQL', 'SASS',
        'Docker', 'Kubernetes', 'MongoDB',
        'PostgreSQL', 'Firebase', 'Azure',
        'AWS', 'Next.js', 'Vercel'
      ];

      // Initialize left sphere
      const leftSphere = TagCloud('.left-cloud', leftTags, {
        radius: 200,
        maxSpeed: leftSpeed,
        initSpeed: 'normal', // Start speed
        direction: 135,
        keep: true,
      });

      // Initialize right sphere
      const rightSphere = TagCloud('.right-cloud', rightTags, {
        radius: 200,
        maxSpeed: rightSpeed,
        initSpeed: 'normal',
        direction: 135,
        keep: true,
      });

      // Random color for both spheres
      const colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', '#FFBA01', '#01A6F0'];
      const random_color = colors[Math.floor(Math.random() * colors.length)];

      document.querySelector('.left-cloud').style.color = random_color;
      document.querySelector('.right-cloud').style.color = random_color;

      // Add mouse event listeners for speed control
      const handleMouseEnterLeft = () => setLeftSpeed('fast');
      const handleMouseLeaveLeft = () => setLeftSpeed('normal');
      const handleMouseEnterRight = () => setRightSpeed('fast');
      const handleMouseLeaveRight = () => setRightSpeed('normal');

      document.querySelector('.left-cloud').addEventListener('mouseenter', handleMouseEnterLeft);
      document.querySelector('.left-cloud').addEventListener('mouseleave', handleMouseLeaveLeft);
      document.querySelector('.right-cloud').addEventListener('mouseenter', handleMouseEnterRight);
      document.querySelector('.right-cloud').addEventListener('mouseleave', handleMouseLeaveRight);

      // Cleanup function
      return () => {
        document.body.removeChild(script);
        document.querySelector('.left-cloud').removeEventListener('mouseenter', handleMouseEnterLeft);
        document.querySelector('.left-cloud').removeEventListener('mouseleave', handleMouseLeaveLeft);
        document.querySelector('.right-cloud').removeEventListener('mouseenter', handleMouseEnterRight);
        document.querySelector('.right-cloud').removeEventListener('mouseleave', handleMouseLeaveRight);
      };
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [leftSpeed, rightSpeed]);

  return (
    <div className="app">
      {/* Left sphere container */}
      <div className="tag-cloud-container">
        <span className="static-core">Core 1</span> {/* Static word in the center */}
        <span className="left-cloud"></span> {/* Rotating words */}
      </div>

      {/* Right sphere container */}
      <div className="tag-cloud-container">
        <span className="static-core">Core 2</span> {/* Static word in the center */}
        <span className="right-cloud"></span> {/* Rotating words */}
      </div>
    </div>
  );
};

export default App;
