import React from 'react';
import { UserProvider } from './UserContext'; // Importing UserProvider from UserContext.js
import App from './App'; // Your main App component

function AppWithContext() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default AppWithContext;
