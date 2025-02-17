/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

//../components/ContactPage.js
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactPage.css';
import { validateEmail, validateRequired } from '../utils/formValidations';

import { TypewriterEffect } from '../components/TypeWritterEffectSmall';
import { TextHoverEffect } from "../components/TextHoverEffect";
import { Linkedin, X, GithubThick, Instagram } from '../icons/Iconbuddy'; 

import '../styles/GradientBackground.css';

const ContactPage = ( { translations }) => {
  const [showSecondEffect, setShowSecondEffect] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondEffect(true); // Show the second effect after a delay
    }, 4500); // Change the delay time as needed (3000 ms = 3 seconds)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);


  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visible to true after delay
    }, 140); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState({
    showForm: true,
    successMessage: '',
    errors: {},
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleInputFocus = (name) => {
    setFormState(prevState => ({
      ...prevState,
      errors: { ...prevState.errors, [name]: '' }
    }));
  };

  const validateForm = (values) => {
    let errors = {};

    if (!validateRequired(values.firstName)) {
      errors.firstName = translations.contactRequiredName;
    }
    if (!validateRequired(values.lastName)) {
      errors.lastName = translations.contactRequiredLastName;
    }
    if (!validateEmail(values.email)) {
      errors.email = translations.contactRequiredEmail;
    }
    if (!validateRequired(values.message)) {
      errors.message = translations.contactRequiredMessage;
    }

    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let errors = validateForm(formValues);

    if (Object.keys(errors).length === 0) {
      const templateParams = {
        from_name: formValues.firstName,
        from_lastname: formValues.lastName,
        from_email: formValues.email,
        message: formValues.message,
      };

      emailjs.send('service_2mq5ytk', 'template_hakpqus', templateParams, 'Aic1W4EbgDmAs8frO')
        .then((response) => {
          setFormState({
            successMessage: translations.contactSuccessMessage,
            showForm: false,
            errors: {},
          });
        }, (error) => {
          alert(translations.contactErrorMessage);
        });
    } else {
      setFormState({ ...formState, errors });
    }
  };

return (
  <div className={`contact_container ${isVisible ? 'visible' : ''}`}>
    
    <div className="background-gradient" /> {/* Apply the gradient background */}
    <div className="contact-page">

      <div className="letsconnect_section h-[10rem] sm:h-[8rem] xs:h-[6rem] flex items-center justify-center">
        <TextHoverEffect text={translations.letsconnect} />
      </div>

      <>
        <div className="inqueries_section">
          <TypewriterEffect
            words={[{ text: translations.contactInqueries }]} 
          />
        </div>

        {showSecondEffect && ( // Only show the second effect if showSecondEffect is true
        <div className="iamHereToHelp_section">
          <TypewriterEffect
            words={[{ text: translations.contactIamHere }]} 
          />
        </div>
        )}
      </>

      {formState.successMessage && (
        <>
          <p className="success-message">{formState.successMessage}</p>
          <button className="send-another-button" onClick={() => setFormState({ showForm: true, successMessage: '', errors: {} })}>
            { translations.sendAnotherMessage }
          </button>
        </>
      )}

      {!formState.successMessage && formState.showForm && (
        <form onSubmit={handleFormSubmit} className="contact-form">
          <div className="input-container">
            <input
              type="text"
              name="firstName"
              placeholder= { translations.contactNamePlaceholder }
              value={formValues.firstName}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('firstName')}
              className={formState.errors.firstName ? 'input-error' : ''}
            />
            {formState.errors.firstName && <span className="error-text">{formState.errors.firstName}</span>}
          </div>
          
          <div className="input-container">
            <input
              type="text"
              name="lastName"
              placeholder= { translations.contactLastNamePlaceholder }
              value={formValues.lastName}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('lastName')}
              className={formState.errors.lastName ? 'input-error' : ''}
            />
            {formState.errors.lastName && <span className="error-text">{formState.errors.lastName}</span>}
          </div>
          
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder= { translations.contactEmailPlaceholder }
              value={formValues.email}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('email')}
              className={formState.errors.email ? 'input-error' : ''}
            />
            {formState.errors.email && <span className="error-text">{formState.errors.email}</span>}
          </div>
          
          <div className="input-container">
            <textarea
              name="message"
              placeholder= { translations.contactMessagePlaceholder }
              value={formValues.message}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('message')}
              className={formState.errors.message ? 'input-error' : ''}
            ></textarea>
            {formState.errors.message && <span className="error-text">{formState.errors.message}</span>}
          </div>
          
          <button type="submit" className="send-button">{ translations.contactSendButton }</button>
        </form>
      )}

      <p className="otherChannels_container" style={{ marginTop: '3rem' }}> { translations.contactOtherChannels } </p>
      
      <div className="contact-social-icons">
        <a href="https://www.linkedin.com/in/rembrandpardo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <Linkedin className="contact_linkedin" />
        </a>
        <a href="https://github.com/Thebatman7" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <GithubThick className="contact_github" />
        </a>
        <a href="https://www.instagram.com/rembrand.paul/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
          <Instagram className="contact_instagram" />
        </a>
        <a href="https://x.com/rembrandpardo" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Profile">
        <X className="contact_x" />
        </a>
      </div>

    </div>

  </div>
  );
};

export default ContactPage;