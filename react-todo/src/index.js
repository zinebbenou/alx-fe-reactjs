import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have some basic styles in an index.css file
import App from './App'; // Assuming you have an App.js file in the same directory

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
