// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
