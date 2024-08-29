// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook if using it

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Use the hook to check authentication status

  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redirect to home page if not authenticated
  }

  return children; // Render the children (protected content) if authenticated
};

export default ProtectedRoute;
