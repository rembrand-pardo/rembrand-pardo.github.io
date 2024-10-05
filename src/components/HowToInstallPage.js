import React from 'react';
import '../styles/HowToInstallPage.css';
import nebulaqrcode from '../assets/nebulaqrcode.png';


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
        <p>
          To fully enjoy the power of Nebula PWA and access all its features, it’s essential to install the PWA on your device. 
          Installing Nebula PWA on your device ensures you get the best experience, with quick access, smoother performance, and the ability to use it even when you’re offline.
        </p>
        <h2>How to Install Nebula PWA on Your Device?</h2>
        <p>
        Installing <a href="https://nebula-topaz-seven.vercel.app/home" target="_blank" rel="noopener noreferrer">Nebula PWA</a> on your device is a simple process that varies slightly depending on your device and operating system.
        </p>
        
        <p>
          To get started, you can either visit the <a href="https://nebula-topaz-seven.vercel.app/home" target="_blank" rel="noopener noreferrer">Nebula PWA site</a> directly on your mobile device or scan the QR code below with your smartphone.
        </p>
        <figure className="image-container">
          <img src={nebulaqrcode} alt="nebulaqrcode" className="image" />
        </figure>

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
