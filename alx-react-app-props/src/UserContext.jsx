import React, { createContext, useContext } from 'react';

// Create a Context for user data
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for using the context
export const useUser = () => useContext(UserContext);

export default UserContext;
