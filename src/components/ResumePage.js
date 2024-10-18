// ../components/ResumePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import throttle from 'lodash/throttle';
import '../styles/ResumePage.css';
import '../styles/GradientBackground.css';

import { PlaceholdersAndVanishInput } from "../components/PlaceholderAndVanish";

import { BackgroundGradient } from "../components/CardGradient";

const ResumePage = ({ translations }) => {
  const [inputText, setInputText] = useState('');
  const [suggestedText, setSuggestedText] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [loading, setLoading] = useState(false);

  const [selectedTab, setSelectedTab] = useState(null); // State to manage selected tab
  const [currentCardData, setCurrentCardData] = useState({}); // State to manage current card data

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
        const files = ['business_dictionary.json', 'management_dictionary.json', 'other_dictionary.json', 'qa_dictionary.json', 'recruitment_dictionary.json'];
        const dicts = {};

        for (let file of files) {
            try {
                const response = await fetch(`/dictionary/${file}`);
                const data = await response.json();
                dicts[file] = data;
            } catch (error) {
                console.error(`Error loading dictionary ${file}:`, error);
            }
        }
        setDictionaries(dicts);
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
        language: 'auto',
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
  

  const searchWord = (word) => {
    const lowerCasedWord = word.toLowerCase();
    let foundData = null;

    for (const dict in dictionaries) {
      if (dictionaries[dict][lowerCasedWord]) {
        foundData = dictionaries[dict][lowerCasedWord];
        break;
      }
    }

    if (foundData) {
      setCurrentCardData({
        title: `Card for ${lowerCasedWord}`,
        content: foundData.description, // Assuming each entry has a description
        image: foundData.image || 'rembrand.JPEG', // Fallback if no image is provided
      });
    } else {
      setCurrentCardData({
        title: 'Generic Card',
        content: 'Here is a general description since nothing matched your search.',
        image: 'Rembrand-logo.png', // Default image for generic card
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

  const handleTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
    setCurrentCardData({}); // Hide the card when a tab is clicked
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
            <a class="languageTool" href="https://languagetool.org" target="_blank" rel="noopener noreferrer">
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
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              className={`tab-button ${selectedTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              Tab {index + 1}
            </button>
          ))}
        </div>


        <div className='resume_cards h-[20rem] flex flex-col justify-center items-center px-4'>
          {selectedTab !== null && currentCardData.title && (  
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
