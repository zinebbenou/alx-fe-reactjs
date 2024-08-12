// src/UserContext.js
import React, { createContext, useContext } from 'react';

// Create Context
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
}

// Create a custom hook for using context
export function useUser() {
  return useContext(UserContext);
}
