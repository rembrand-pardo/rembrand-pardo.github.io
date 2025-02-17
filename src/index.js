/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the updated ReactDOM API
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/index.css'; // Import global styles if you have any

// Find the root DOM element
const rootElement = document.getElementById('root');

// Create a root using the new API
const root = ReactDOM.createRoot(rootElement);

// Render the application using the new API
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
