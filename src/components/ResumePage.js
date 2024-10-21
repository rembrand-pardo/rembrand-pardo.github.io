// ../components/ResumePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import throttle from 'lodash/throttle';
import '../styles/ResumePage.css';
import '../styles/GradientBackground.css';

import { PlaceholdersAndVanishInput } from "../components/PlaceholderAndVanish";

import { BackgroundGradient } from "../components/CardGradient";

const ResumePage = ({ translations, language }) => {
  const [inputText, setInputText] = useState('');
  const [suggestedText, setSuggestedText] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [loading, setLoading] = useState(false);

  const [selectedTab, setSelectedTab] = useState(null); // State to manage selected tab
  const [currentCardData, setCurrentCardData] = useState({}); // State to manage current card data


  // Log the language to test
  console.log("language selected:", language);

  const placeholders = [
    "Business analytics",
    "Project management",
    "Product management",
    "Supervisor",
    "Office manager",
  ];

  const grammarCache = {};// Cache to store previous grammar checks

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 140);
    return () => clearTimeout(timer);
  }, []);


  // Preload dictionaries in memory
  const [dictionaries, setDictionaries] = useState({});
  useEffect(() => {
    const loadDictionaries = async () => {
      const files = [
        { file: 'business_dictionary.json' },
        { file: 'management_dictionary.json' },
        { file: 'other_dictionary.json' },
        { file: 'qa_dictionary.json' },
        { file: 'recruitment_dictionary.json' }
      ];
      
      const dict = {};

      for (let { file } of files) {
        try {
          const response = await fetch(`/dictionary/${file}`);
          const data = await response.json();
          
          // 'data' is an object where the key is the PDF file and the value is an array of words
          for (let pdfFile in data) {
            const words = data[pdfFile];
            words.forEach(word => {
              dict[word] = pdfFile; // Associate each word with its respective PDF
            });
          }
        } catch (error) {
          console.error(`Error loading dictionary ${file}:`, error);
        }
      }

      setDictionaries(dict); // Save the word-to-PDF mappings to state
    };

    loadDictionaries();
  }, []);

  


  // Throttled grammar check to respect rate limits
  const throttledCheckGrammar = throttle(async (text) => {
    if (grammarCache[text]) {
      return grammarCache[text];
    }

    try {
      const response = await axios.post('https://api.languagetool.org/v2/check', new URLSearchParams({
        text: text,
        language: language === 'en' ? 'en-US' : language,
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      grammarCache[text] = response.data;
      return response.data;
    } catch (error) {
      console.error('Grammar check failed:', error);
      throw error;
    }
  }, 3000, { leading: true, trailing: false }); // 20 requests per minute

  const handleChange = (e) => {
    setInputText(e.target.value);
    setSelectedTab(null); // Deselect tab when user types
    setCurrentCardData({}); // Hide card when user types
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuggestedText('');
    setIsCorrect(true);
  
    let formattedInputText = inputText.trim();
  
    if (formattedInputText.split(' ').length > 1) { // Check if there is more than one word
      formattedInputText = formattedInputText.charAt(0).toUpperCase() + formattedInputText.slice(1); // Capitalize the first letter of the first word if it's not already
    }
  
    try {
      const result = await throttledCheckGrammar(formattedInputText);
      if (result.matches.length > 0) {
        let correctedText = formattedInputText;
  
        result.matches.forEach((match) => {
          const suggestion = match.replacements[0].value;
          correctedText = correctedText.substring(0, match.offset) +
                          suggestion +
                          correctedText.substring(match.offset + match.length);
        });
  
        setSuggestedText(correctedText);
        setIsCorrect(false);
      } else {
        setIsCorrect(true);
        searchWord(formattedInputText);
      }
    } catch (error) {
      alert('Grammar check service is currently unavailable. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  

  const pdfDetailsMap = {
    "pdfs/business.pdf": {
      image: "/pdfs/pdf_images/business.png",
      title: "This is a title for the business card",
      content: "This card contains info about business and what my business resume contains",
    },
    "pdfs/hr_recruiter.pdf": {
      image: "pdfs/pdf_images/hr_recruiter.png",
      title: "This is a title for the hr card",
      content: "This card contains info about hr and what my hr resume contains",
    },
    "pdfs/management.pdf": {
      image: "pdfs/pdf_images/management.png",
      title: "This is a title for the management card",
      content: "This card contains info about management and what my management resume contains",
    },
    "pdfs/public_relations.pdf": {
      image: "pdfs/pdf_images/public_relations.png",
      title: "This is a title for the public relations card",
      content: "This card contains info about PR and what my PR resume contains",
    },
    "pdfs/sdet.pdf": {
      image: "pdfs/pdf_images/sdet.png",
      title: "This is a title for the sdet card",
      content: "This card contains info about sdet and what my sdet resume contains",
    },
  };
  

  const searchWord = (word) => {
    const lowerCasedWord = word.toLowerCase();
    const foundPdf = dictionaries[lowerCasedWord];
  
    if (foundPdf) {
      const normalizedPdf = foundPdf.toLowerCase();  // Ensure PDF names are in lowercase
      const pdfDetails = pdfDetailsMap[normalizedPdf];  // Use normalizedPdf in the lookup
      
      if (pdfDetails) {
        setCurrentCardData({
          title: pdfDetails.title,
          content: pdfDetails.content,
          image: pdfDetails.image,
          pdfLink: foundPdf, // Set the PDF link
        });
      } else {
        // If no specific PDF details are found, fall back to generic card info
        setCurrentCardData({
          title: `Card for ${lowerCasedWord}`,
          content: `The content is related to ${lowerCasedWord}.`,
          image: 'rembrand.JPEG', // Fallback image
          pdfLink: foundPdf, // Set the PDF link
        });
      }
    } else {
      // If no PDF is found, use generic card information
      setCurrentCardData({
        title: 'Generic Card',
        content: 'Here is a general description since nothing matched your search.',
        image: 'Rembrand-logo.png', // Default image for generic card
        pdfLink: 'pdfs/management.pdf', // Set the PDF link
      });
    }
  };
  


  const confirmSuggestion = () => {
    setIsCorrect(true);
    searchWord(suggestedText);
  };

  const rejectSuggestion = () => {
    setSuggestedText('');
  };

  const handleTabClick = (tabName, tabIndex) => {
    setCurrentCardData({}); // Hide the card when a tab is clicked
    setSelectedTab(tabIndex);
    searchWord(tabName);
  };

  return (
    <div className={`resume_page ${isVisible ? 'visible' : ''}`}>
      
      <div className="background-gradient" />
      <div className="resume_page_content">
        <div className="h-[40rem] flex flex-col justify-center items-center px-4">
          <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-white">
            Ask Anything
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
            disabled={loading}
          />

          {loading && <p>Checking grammar...</p>}
          

          <div style={{ fontSize: '8px', marginTop: '14px' }}>
            <a className="languageTool" href="https://languagetool.org" target="_blank" rel="noopener noreferrer">
              Powered by LanguageTool
            </a>
          </div>
          

          {!isCorrect && suggestedText && (
            <div className='inputVerification_section'>
              <p>Did you mean: <strong>{suggestedText}</strong>?</p>
              <button onClick={confirmSuggestion}>Yes</button>
              <button onClick={rejectSuggestion}>No</button>
            </div>
          )}

        </div>

        {/* Tabs for card selection */}
        <div className='field_tabs tabs flex justify-center mt-4'>
          {["Business", "Hr Recruiter", "Manager", "Public Relations", "SDET"].map((tabName, index) => (
            <button
              key={index}
              className={`tab-button ${selectedTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(tabName, index)}
            >
              {tabName}
            </button>
          ))}
        </div>

        <div className='resume_cards h-[20rem] flex flex-col justify-center items-center px-4'>
          {(selectedTab !== null || currentCardData.title) && currentCardData.title && (
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black bg-opacity-60 dark:bg-black dark:bg-opacity-20">
              <img
                src={currentCardData.image}
                alt={currentCardData.title}
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                {currentCardData.title}
              </p>
      
              <p className="text-sm text-white">
                {currentCardData.content}
              </p>
              <button className="rounded-full pl-4 pr-4 py-2 text-white flex text-center bg-blue-600 mt-4 text-xs mx-auto block">
                View Resume {/* a link to the right foundPdf should be in the button and open the pdf in a different browser tab */}
              </button>
            </BackgroundGradient>
          )}
        </div>

      </div>
    </div>
  );
};

export default ResumePage;
