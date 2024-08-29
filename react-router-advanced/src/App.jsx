// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost'; // Import the BlogPost component
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute'; // If using protected routes

const App = () => {
  const isAuthenticated = true; // Simulate authentication status

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Route for dynamic blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />
        
        {/* Protected route example */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
