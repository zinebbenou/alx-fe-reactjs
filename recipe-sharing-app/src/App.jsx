// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetail';
import FavoritesList from './components/FavoritesList';  // Import FavoritesList
import RecommendationsList from './components/RecommendationsList';  // Import RecommendationsList

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
        <FavoritesList />  {/* Add FavoritesList component */}
        <RecommendationsList />  {/* Add RecommendationsList component */}
      </div>
    </Router>
  );
};

export default App;
