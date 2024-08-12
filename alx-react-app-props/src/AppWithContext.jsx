// src/AppWithContext.jsx
import React from 'react';
import App from './App';
import { UserProvider } from './UserContext';

function AppWithContext() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default AppWithContext;
