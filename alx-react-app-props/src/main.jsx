// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './UserContext'; // Import UserProvider
import AppWithContext from './AppWithContext'; // Your main app component
import './index.css'; // Your CSS file

ReactDOM.render(
  <React.StrictMode>
    <UserProvider> {/* Wrap your app with UserProvider */}
      <AppWithContext />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
src/index.jsx or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWithContext from './AppWithContext'; // Adjust the path if needed
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithContext />
  </React.StrictMode>
);
