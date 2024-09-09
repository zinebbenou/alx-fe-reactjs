import React, { useState, useEffect } from 'react';
import data from '../data.json'; // Import the mock data

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setRecipes(data);
  }, []);

  return (
    <div className="p-6 bg-background-light min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <a href={`#/recipes/${recipe.id}`} className="text-blue-500 hover:text-blue-700">View Recipe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
