// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import data from '../data.json';  // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the recipes from the local data file
    setRecipes(data);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {recipes.map(recipe => (
        <div key={recipe.id} className="card bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
          <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
          <p className="mb-4">{recipe.summary}</p>
          <Link to={`/recipe/${recipe.id}`} className="bg-button-background-dark text-white px-4 py-2 rounded border border-transparent hover:border-primary transition-border">
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
