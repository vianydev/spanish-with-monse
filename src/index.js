import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import "@fontsource/merriweather";
import "@fontsource/merriweather/900.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/700.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
