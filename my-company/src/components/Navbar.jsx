// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // Define inline styles
  const navbarStyle = {
    backgroundColor: '#282c34', // Example background color
    display: 'flex',           // Use flexbox layout
    justifyContent: 'space-between', // Space items evenly
    padding: '1rem',           // Add padding around the navbar
    color: 'white'             // Text color
  };

  const linkStyle = {
    color: 'white',            // Link text color
    textDecoration: 'none'     // Remove underline from links
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
