import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="aboutpage">
    
      <div className="content">
        <h1>About Us</h1>
        <h2>Transforming the Rental Experience</h2>
        <p>
        <a href="https://nebula-topaz-seven.vercel.app/home" target="_blank" rel="noopener noreferrer">Nebula PWA</a> was born out of the need to combat a saturated rental market that was built without renters in mind.
          Many platforms prioritize large-scale operations, leaving small landlords and renters—especially college students—struggling with complicated, expensive processes. 
          Nebula changes that by focusing on simplicity, affordability, and efficiency. 
          Our mission is to make the rental process easier for everyone, whether you're listing a property or searching for the perfect room.
          Landlords, renters, including college students looking for a room and selling their contract, can easily list their property, private or shared rooms. 
          Our user-friendly interface makes managing listings a breeze, ensuring that your property reaches the right audience without any hassle.
        </p>
          
        <h2>Why Renting with Nebula is Better than Buying?</h2>
        <p>
          Renting offers significant advantages over buying a property, and Nebula is here to make that experience even better. 
        </p>
        <ul>
          <li><strong>Spend Less:</strong> Renting allows you to avoid the high upfront costs of purchasing a property, leaving more room in your budget for other priorities.</li>
          <li><strong>Fewer Headaches:</strong> With renting, there’s no need to worry about property maintenance, repairs, or unexpected costs that come with homeownership.</li>
          <li><strong>Less Responsibility:</strong> Renting gives you the freedom to move without the long-term commitment and burdens associated with owning a home.</li>
          <li><strong>More Flexibility:</strong> You can easily adapt to life changes, whether it's moving to a new city, changing jobs, or upgrading to a bigger space.</li>
        </ul>
        <p>
          <a href="https://www.linkedin.com/company/nebula-software-technology" target="_blank" rel="noopener noreferrer">Nebula</a> takes these benefits to the next level by offering a platform designed with the renter’s needs at the forefront, ensuring that the process is as smooth and hassle-free as possible.
        </p>

        <h2>What is a PWA?</h2>
        <p>
          A <a href="https://en.wikipedia.org/wiki/Progressive_web_app" target="_blank" rel="noopener noreferrer">Progressive Web App (PWA)</a> is a web-based application that offers a mobile app-like experience directly from your web browser. 
          Designed to work seamlessly across all devices, PWAs provide offline functionality, push notifications, 
          and faster load times. Nebula’s PWA gives you all the benefits of a native app without the need to download it from an app store.
        </p>
        <p>
          To fully enjoy the power of Nebula and access all its features, it’s essential to install the PWA on your device. 
          Installing Nebula as a PWA ensures you get the best experience, with quick access, smoother performance, and the ability to use it even when you’re offline.
        </p>

        {/* Add the disclaimer */}
        <p className="disclaimer">
          <sup>*</sup> Nebula provides free services with certain conditions: Free access is available for single users, not companies or people representing organizations or apartment management companies. 
          Free access is also available for single users who do not share accounts and is limited to one post—either a private or shared room or one property. 
          Additional features and posting more than one room or property require a subscription.
        </p>

      </div>
    </div>
  );
};

export default AboutPage;