import React, { createContext, useContext, useState } from 'react';

// Create a Context for user data
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com"
  });

  // You can add methods to update the user data here if needed
  // Example:
  // const updateUser = (newData) => setUserData(newData);

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}

// Create a custom hook to use the UserContext
export function useUser() {
  return useContext(UserContext);
}
