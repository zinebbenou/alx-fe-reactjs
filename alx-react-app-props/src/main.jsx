// src/index.jsx or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithContext from './AppWithContext'; // Adjust the path if needed
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithContext />
  </React.StrictMode>
);
