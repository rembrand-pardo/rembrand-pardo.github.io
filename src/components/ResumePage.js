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

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis hiding?",
    "Write a JavaScript method to reverse a string",
    "How to assemble your own PC?",
  ];

  // Cache to store previous grammar checks
  const grammarCache = {};

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 140);
    return () => clearTimeout(timer);
  }, []);


  //preload dictionaries in memory
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


  //throttled grammar check to respect rate limits
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
  };

  //submit function
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuggestedText('');
    setIsCorrect(true);
  
    let formattedInputText = inputText.trim();
  
    // Check if there is more than one word
    if (formattedInputText.split(' ').length > 1) {
      // Capitalize the first letter of the first word if it's not already
      formattedInputText = formattedInputText.charAt(0).toUpperCase() + formattedInputText.slice(1);
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
  

  
  //search function
  const searchWord = (word) => {
    const lowerCasedWord = word.toLowerCase();
    let foundPdf = null;
  
    for (const dict in dictionaries) {
      if (dictionaries[dict][lowerCasedWord]) {
        foundPdf = dictionaries[dict][lowerCasedWord];
        break;
      }
    }
  
    if (foundPdf) {
      window.open(foundPdf, '_blank');
    } else {
      window.open('pdfs/management.pdf', '_blank');
    }
  };

  const confirmSuggestion = () => {
    setIsCorrect(true);
    searchWord(suggestedText);
  };

  const rejectSuggestion = () => {
    setSuggestedText('');
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
          
          {/* Add the required link back to LanguageTool: https://dev.languagetool.org/public-http-api.html */}
          <div style={{ fontSize: '8px', marginTop: '14px' }}>
            <a class="languageTool" href="https://languagetool.org" target="_blank" rel="noopener noreferrer">
              Powered by LanguageTool
            </a>
          </div>
          
          {!isCorrect && suggestedText && (
            <div>
              <p>Did you mean: <strong>{suggestedText}</strong>?</p>
              <button onClick={confirmSuggestion}>Yes</button>
              <button onClick={rejectSuggestion}>No</button>
            </div>
          )}

        </div>

        {/*Here is where we should have the five centered tabs. When one of them is clicked the card below show be visbile based on 
        the tab selected. if after a tab is selected a users starts typing in the search bar above then the card is not visible and the selected tab is unslected
        until a tab is selected again. */}

        {/* Based on the search result and if spelling is correct this card will be visible with right image and the right text.
        all depends on which file the searched word was found in. This card will changed if one of the tabs above is selected. */}
        <div className='resume_cards h-[20rem] flex flex-col justify-center items-center px-4'>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black bg-opacity-60 dark:bg-black dark:bg-opacity-20">
                <img
                    src={`Rembrand-logo.png`}
                    alt="dummy"
                    height="400"
                    width="400"
                    className="object-contain"
                />
                <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                 Card 1 out of 5
                </p>
        
                <p className="text-sm text-white">
                    The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                    February 17, 2024. Your best opportunity to get these right now is by
                    entering raffles and waiting for the official releases.
                </p>
                <button className="rounded-full pl-4 pr-4 py-2 text-white flex text-center bg-blue-600 mt-4 text-xs mx-auto block">
                    View Resume
                </button>
            </BackgroundGradient>
        </div>

      </div>
    </div>
  );
};

export default ResumePage;
