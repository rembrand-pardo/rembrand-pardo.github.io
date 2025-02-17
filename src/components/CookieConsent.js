/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import React from 'react';
import { db, analytics } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { logEvent } from 'firebase/analytics';
import '../styles/CookieConsent.css';

import { cn } from '../lib/utils';
import translations from '../assets/locales/translations';

const CookieConsent = ({ onConsent, language }) => {
  const handleAccept = async () => {
    localStorage.setItem('cookieConsent', 'true');
    onConsent();

    // Log an event in Firebase Analytics
    logEvent(analytics, 'cookie_consent_given');

    // Store user data in Firestore
    const userRef = doc(db, 'users', 'some-unique-id');
    await setDoc(userRef, {
      device: getDeviceType(),
      location: 'User Location (implement geolocation)',
      age: 'User Age (collect from form)',
      timestamp: new Date().toISOString(),
    });
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    onConsent();
  };

  return (
    <div className="cookie-consent">
      <p>{translations[language].cookieMessage}</p> {/* Translated cookie message */}
      <div className="cookie-consent-buttons">

        <button
          className={cn(
            "relative inline-flex h-9.9 overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-all duration-700"
          )}
          onClick={handleAccept}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-300 active:text-blue-400">
            {translations[language].acceptButton} {/* Translated Accept button */}
          </span>
        </button>

        <button
          className={cn(
            "relative inline-flex h-9.9 overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-all duration-700"
          )}
          onClick={handleReject}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFC1C1_0%,#FF6B6B_50%,#FFC1C1_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors duration-300 active:text-blue-400">
            {translations[language].rejectButton} {/* Translated Reject button */}
          </span>
        </button>

      </div>
    </div>
  );
};

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/mobile/i.test(ua)) return 'Mobile';
  if (/tablet/i.test(ua)) return 'Tablet';
  return 'Desktop';
};

export default CookieConsent;
