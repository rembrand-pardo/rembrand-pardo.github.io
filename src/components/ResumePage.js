// ../components/ResumePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import throttle from 'lodash/throttle';
import '../styles/ResumePage.css';
import '../styles/GradientBackground.css';

import { FocusCards } from './FocusCards';

import { PlaceholdersAndVanishInput } from "../components/PlaceholderAndVanish";

import { BackgroundGradient } from "../components/CardGradient";

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';


import CardFolder from "../components/CardFolder"
import { 
  cards, 
  othercards, 
  recruitmentcards, 
  analysiscards, 
  managementcards 
} from '../components/CertificatesData';

//TODO: Content needs update

const ResumePage = ({ translations, language }) => {
  const [inputText, setInputText] = useState('');
  const [suggestedText, setSuggestedText] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [loading, setLoading] = useState(false);

  const [selectedTab, setSelectedTab] = useState(null); // State to manage selected tab
  const [currentCardData, setCurrentCardData] = useState({}); // State to manage current card data

  const [isSuggestionRejected, setIsSuggestionRejected] = useState(false); // New state to track suggestion rejection

  const [currentCards, setCurrentCards] = useState(cards); // Sets the focus cards
  const [showFocusCards, setShowFocusCards] = useState(false); // State to manage visibility of FocusCards

  // Function to log analytics
  const logAnalytics = async (event, data = {}) => {
    try {
      await addDoc(collection(db, 'analytics'), {
        event,
        data,
        timestamp: new Date().toISOString(),
      });
      console.log(`Logged ${event} event`, data);
    } catch (error) {
      console.error("Error logging analytics:", error);
    }
  };


  const placeholders = [
    translations.placeholders1,
    translations.placeholders2,
    translations.placeholders3,
    translations.placeholders4,
    translations.placeholders5,
    translations.placeholders6,
    translations.placeholders7,
    translations.placeholders8,
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
    setIsSuggestionRejected(false); //hide rejection message
    setShowFocusCards(false);
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuggestedText('');
    setIsCorrect(true);
    setIsSuggestionRejected(false);
  
    let formattedInputText = inputText.trim();

    // Log the search query
    logAnalytics('search', { query: formattedInputText });
  
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
      alert( translations.resumeGrammarCheckService );
    } finally {
      setLoading(false);
    }
  };
  

  const pdfDetailsMap = {
    "pdfs/business.pdf": {
      image: "/pdfs/pdf_images/business.png",
      title: translations.resumeCardTitleBusiness,
      content: translations.resumeCardContentBusiness,
    },
    "pdfs/hr_recruiter.pdf": {
      image: "pdfs/pdf_images/hr_recruiter.png",
      title: translations.resumeCardTitleHR,
      content: translations.resumeCardContentHR,
    },
    "pdfs/management.pdf": {
      image: "pdfs/pdf_images/management.png",
      title: translations.resumeCardTitleManagement,
      content: translations.resumeCardContentManagement,
    },
    "pdfs/public_relations.pdf": {
      image: "pdfs/pdf_images/public_relations.png",
      title: translations.resumeCardTitlePR,
      content: translations.resumeCardContentPR,
    },
    "pdfs/sdet.pdf": {
      image: "pdfs/pdf_images/sdet.png",
      title: translations.resumeCardTitleSDET,
      content: translations.resumeCardContentSDET,
    },
  };

  const pdfToFocusCardsMap = {
    "pdfs/business.pdf": {
        newCardSet: analysiscards,
    },
    "pdfs/hr_recruiter.pdf": {
        newCardSet: recruitmentcards,
    },
    "pdfs/management.pdf": {
        newCardSet: managementcards,
    },
    "pdfs/public_relations.pdf": {
        newCardSet: cards,
    },
    "pdfs/sdet.pdf": {
        newCardSet: othercards,
    },
  };

  const searchWord = (word) => {
    const lowerCasedWord = word.toLowerCase();
    const foundPdf = dictionaries[lowerCasedWord];
  
    if (foundPdf) {
      const normalizedPdf = foundPdf.toLowerCase();  // Ensure PDF names are in lowercase
      const pdfDetails = pdfDetailsMap[normalizedPdf];  // Use normalizedPdf in the lookup
      
      if (pdfDetails) {
        setCurrentCards(pdfToFocusCardsMap[foundPdf].newCardSet); // Update the current cards to the mapped card set

        setCurrentCardData({
          title: pdfDetails.title,
          content: pdfDetails.content,
          image: pdfDetails.image,
          pdfLink: foundPdf, // Set the PDF link
        });
      } else {
        setCurrentCards(cards); // Fallback to a default set of cards

        // If no specific PDF details are found, fall back to generic card info
        setCurrentCardData({
          title: `${translations.resumeCardTitleGeneral} ${lowerCasedWord}`,
          content: `${translations.resumeCardContentGeneral} ${lowerCasedWord}.`,
          image: 'rembrand.JPEG', // Fallback image
          pdfLink: foundPdf, // Set the PDF link
        });
      }
    } else {
      setCurrentCards(cards); // Show a default set of cards
      // If no PDF is found, use generic card information
      setCurrentCardData({
        title: translations.resumeCardTitleGeneric,
        content: translations.resumeCardContentGeneric,
        image: 'Rembrand-logo.png', // Default image for generic card
        pdfLink: 'pdfs/management.pdf', // Set the PDF link
      });
    }
    setShowFocusCards(true);
  };
  

  const confirmSuggestion = () => {
    setIsCorrect(true);
    searchWord(suggestedText);
    setIsSuggestionRejected(false); // Clear rejection status if user confirms the suggestion
  
    // Log the 'Yes' button click
    logAnalytics('confirm_suggestion', { suggestion: suggestedText });
  };

  const rejectSuggestion = () => {
    setSuggestedText('');
    searchWord(inputText);
    setIsSuggestionRejected(true); // Set rejection status

    // Log the 'No' button click
    logAnalytics('reject_suggestion', { originalText: inputText });
  };

  const handleTabClick = (tabName, tabIndex) => {
    setCurrentCardData({}); // Hide the card when a tab is clicked
    setIsSuggestionRejected(false); //hide rejection message
    setSelectedTab(tabIndex);

    // Log the tab click
    logAnalytics('tab_click', { tabName, tabIndex });

    searchWord(tabName);
  };

  const cardFolders = [
    {
      title: "Gene Sequence",
      description:
        "I implemented two versions of a dynamic programming algorithm for computing the minimal cost of aligning gene sequences and extracting an optimal alignment.",
      link: "github.com/Thebatman7/gene_sequencing",
    },
    {
      title: "Traveling Salesman",
      description:
        "Implements a branch-and-bound algorithm to solve the Traveling Salesman Problem (TSP).",
      link: "#",
    },
    {
      title: "US Weather Forecast",
      description:
        "Weather forecast for any city in the US using global/local models and weather stations.",
      link: "#",
    },
    {
      title: "Gene Sequence",
      description:
        "I implemented two versions of a dynamic programming algorithm for computing the minimal cost of aligning gene sequences and extracting an optimal alignment.",
      link: "#",
    },
    {
      title: "Your bucketlist",
      description:
        "A single page web app for storing pictures of your travel experiences and places on your bucket list, built with Node.js, MongoDB, CSS, and JavaScript.",
      link: "#",
    },
    {
      title: "Traveling Salesman",
      description:
        "Implements a branch-and-bound algorithm to solve the Traveling Salesman Problem (TSP).",
      link: "#",
    },
    {
      title: "US Weather Forecast",
      description:
        "Weather forecast for any city in the US using global/local models and weather stations.",
      link: "#",
    },
    // Add more card details as needed
  ];

  return (
    <div className={`resume_page ${isVisible ? 'visible' : ''}`}>
      
      <div className="background-gradient" />
      <div className="resume_page_content">
        <div className="h-[23rem] flex flex-col justify-end items-center px-4">
          <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-white">
            { translations.resumeCardSearchHeading }
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
            disabled={loading}
          />

          {loading && <p> {translations.resumeCheckingGrammar} </p>}
          

          <div style={{ fontSize: '8px', marginTop: '14px' }}>
            <a className="languageTool" href="https://languagetool.org" target="_blank" rel="noopener noreferrer">
              { translations.resumeLanguageTool }
            </a>
          </div>
          

          {!isCorrect && suggestedText && (
            <div className='inputVerification_section'>
              <p>{ translations.resumeDidYouMean } <strong>{suggestedText}</strong>?</p>
              <div className="button-group">
                <button onClick={confirmSuggestion}> { translations.resumeCardSearchYes } </button>
                <button onClick={rejectSuggestion}> { translations.resumeCardSearchNo } </button>
              </div>
            </div>
          )}

          {/* Conditionally render this message only when the suggestion is rejected */}
          {isSuggestionRejected && (
            <div className='rejectSuggestion_message'>
              <p>{ translations.resumeRejectSuggestionMessage }</p>
            </div>
          )}

        </div>

        {/* Tabs for card selection */}
        <div className='field_tabs tabs flex justify-center mt-10'>
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
            <BackgroundGradient className="rounded-[22px] max-w-sm p-3 sm:p-7 bg-black bg-opacity-60 dark:bg-black dark:bg-opacity-20">
              <img
                src={currentCardData.image}
                alt={currentCardData.title}
                height="400"
                width="400"
                className="object-contain fade-bottom rounded-top"
              />
              <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                {currentCardData.title}
              </p>
      
              <p className="text-sm text-white">
                {currentCardData.content}
              </p>
              <a
                href={currentCardData.pdfLink} // Use pdfLink here
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                className="viewResume_container rounded-full pl-4 pr-4 py-2 text-white flex text-center bg-blue-600 mt-4 text-xs mx-auto block"
                onClick={() => logAnalytics('view_resume', { pdfLink: currentCardData.pdfLink })}
              >
                { translations.resumeViewResumeCardButton }
              </a>
            </BackgroundGradient>
          )}
        </div>

        {showFocusCards && (
          <div className='certificatesCards_container'
          style={{
            display: 'flex',
            justifyContent: 'center', // Centers horizontally
            alignItems: 'center', // Centers vertically
            flexDirection: 'column', // Adjusts direction if needed
            marginTop: '20px' // Optional: adds space above
          }}>
            <FocusCards cards={currentCards} /> 
          </div>
        )}

        
        <div
          className={`card-container ${selectedTab !== 4 && currentCardData.title !== translations.resumeCardTitleSDET ? 'hidden' : ''}`}
        >
          {(selectedTab === 4 || currentCardData.title === translations.resumeCardTitleSDET) && (
            cardFolders.map((cardFolders, index) => (
              <CardFolder
                key={index}
                title={cardFolders.title}
                description={cardFolders.description}
                link={cardFolders.link}
              />
            ))
          )}
        </div>



      </div>
    </div>
  );
};

export default ResumePage;
