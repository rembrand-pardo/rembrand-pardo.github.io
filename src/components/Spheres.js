import React, { useEffect, useState } from 'react';
import '../styles/Spheres.css';

/* global TagCloud */ // Inform ESLint that TagCloud is a global variable

const App = () => {
  const [leftSpeed, setLeftSpeed] = useState('normal');
  const [rightSpeed, setRightSpeed] = useState('normal');

  useEffect(() => {
    // Load TagCloud script if it's not already loaded
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/libs/TagCloud.min.js`; // Use local path
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

      // Ensure spheres are created only once
      const leftSphereContainer = document.querySelector('.left-cloud');
      const rightSphereContainer = document.querySelector('.right-cloud');

      if (!leftSphereContainer.hasChildNodes()) {
        TagCloud('.left-cloud', leftTags, {
          radius: 200,
          maxSpeed: leftSpeed,
          initSpeed: 'normal',
          direction: 135,
          keep: true,
        });
      }

      if (!rightSphereContainer.hasChildNodes()) {
        TagCloud('.right-cloud', rightTags, {
          radius: 200,
          maxSpeed: rightSpeed,
          initSpeed: 'normal',
          direction: 135,
          keep: true,
        });
      }

      // Set the spheres' color to baby blue
      document.querySelector('.left-cloud').style.color = '#89CFF0'; // Baby blue
      document.querySelector('.right-cloud').style.color = '#89CFF0'; // Baby blue

      // Add mouse event listeners for speed control
      const handleMouseEnterLeft = () => setLeftSpeed('fast');
      const handleMouseLeaveLeft = () => setLeftSpeed('normal');
      const handleMouseEnterRight = () => setRightSpeed('fast');
      const handleMouseLeaveRight = () => setRightSpeed('normal');

      leftSphereContainer.addEventListener('mouseenter', handleMouseEnterLeft);
      leftSphereContainer.addEventListener('mouseleave', handleMouseLeaveLeft);
      rightSphereContainer.addEventListener('mouseenter', handleMouseEnterRight);
      rightSphereContainer.addEventListener('mouseleave', handleMouseLeaveRight);

      // Cleanup function to remove listeners and script
      return () => {
        leftSphereContainer.removeEventListener('mouseenter', handleMouseEnterLeft);
        leftSphereContainer.removeEventListener('mouseleave', handleMouseLeaveLeft);
        rightSphereContainer.removeEventListener('mouseenter', handleMouseEnterRight);
        rightSphereContainer.removeEventListener('mouseleave', handleMouseLeaveRight);
        document.body.removeChild(script);
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