// src/AppWithContext.jsx
import React from 'react';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage component

function AppWithContext() {
  return (
    <ProfilePage /> {/* No need to pass userData as a prop */}
  );
}

export default AppWithContext;
