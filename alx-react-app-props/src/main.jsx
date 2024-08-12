import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithContext from './AppWithContext'; // Importing AppWithContext.jsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithContext />
  </React.StrictMode>
);
