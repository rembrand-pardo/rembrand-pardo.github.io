import React from 'react';
import '../styles/HowToInstallPage.css';


const HowToInstallPage = () => {
  return (
    <div className="installpage">
      
      <div className="content">
        <h1>Install Nebula PWA on Your Device</h1>
        <p>
          A <a href="https://en.wikipedia.org/wiki/Progressive_web_app" target="_blank" rel="noopener noreferrer">Progressive Web App (PWA)</a> is a web application that uses modern web technologies to provide an app-like experience to users. 
          PWAs are designed to work on any device with a compatible browser, and they can be installed on a user’s device just like a native app. 
          The key features of PWAs are their reliability, speed, and ability to work offline. 
          Nebula’s PWA gives you all the benefits of a native app without the need to download it from an app store.
        </p>
        

        {/* Add the disclaimer */}
        <p className="disclaimer">
          <sup>*</sup> Please note that mobile browser technologies and user interfaces are frequently updated, so the steps to add Nebula PWA to your device may vary slightly. 
          However, the overall process remains the same. If you encounter any issues, don’t hesitate to <a href="https://nebula-tech-hub.github.io/#/contact" target="_blank" rel="noopener noreferrer">contact us</a> for assistance.
        </p>
      </div>
    </div>
  );
};

export default HowToInstallPage;
