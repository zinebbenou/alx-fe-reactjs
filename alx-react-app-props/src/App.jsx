import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider value={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
