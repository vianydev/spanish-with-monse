import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import "@fontsource/merriweather";
import "@fontsource/merriweather/900.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/700.css"
import App from './App';
import './i18n';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  
);
