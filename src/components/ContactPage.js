import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactPage.css';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { validateEmail, validateRequired } from '../utils/formValidations';

import NebulaBackground from '../components/NebulaBackground';

const ContactPage = () => {
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
      errors.firstName = 'First Name is required';
    }
    if (!validateRequired(values.lastName)) {
      errors.lastName = 'Last Name is required';
    }
    if (!validateEmail(values.email)) {
      errors.email = 'Valid Email is required';
    }
    if (!validateRequired(values.message)) {
      errors.message = 'Message is required';
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
            successMessage: 'Thank you for your message. I will be in touch as soon as possible.',
            showForm: false,
            errors: {},
          });
        }, (error) => {
          alert('Failed to send the message, please try again.');
        });
    } else {
      setFormState({ ...formState, errors });
    }
  };

  return (
    <div className="container">

      <NebulaBackground /> {/* */}
      
      <div className="contact-page">
        <h1>Let's Connect</h1>
        <p>Have questions or inquiries?</p>
        <p>Send me a message. I am here to help!</p>

        {formState.successMessage && (
          <>
            <p className="success-message">{formState.successMessage}</p>
            <button className="send-another-button" onClick={() => setFormState({ showForm: true, successMessage: '', errors: {} })}>
              Send another message
            </button>
          </>
        )}

        {!formState.successMessage && formState.showForm && (
          <form onSubmit={handleFormSubmit} className="contact-form">
            <div className="input-container">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
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
                placeholder="Last Name"
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
                placeholder="Email"
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
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleInputChange}
                onFocus={() => handleInputFocus('message')}
                className={formState.errors.message ? 'input-error' : ''}
              ></textarea>
              {formState.errors.message && <span className="error-text">{formState.errors.message}</span>}
            </div>
            
            <button type="submit" className="send-button">Send</button>
          </form>
        )}

        <p style={{ marginTop: '1.5rem' }}>Discover more and get in touch though the following channels:</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/rembrandpardo/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Thebatman7" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/rembrand.paul/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://x.com/rembrandpardo" target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;