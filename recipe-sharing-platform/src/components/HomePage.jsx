// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the recipes from the local data file
    setRecipes(data);
  }, []);

  return (
    <div className="p-4">
      {/* Add New Recipe Link */}
      <div className="mb-4">
        <Link
          to="/add-recipe"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Add New Recipe
        </Link>
      </div>
      
      {/* Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="card bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="mb-4">{recipe.summary}</p>
            <Link 
              to={`/recipe/${recipe.id}`} 
              className="bg-button-background-dark text-white px-4 py-2 rounded border border-transparent hover:border-primary transition-border"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
