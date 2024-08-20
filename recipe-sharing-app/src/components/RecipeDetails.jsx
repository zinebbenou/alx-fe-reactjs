// src/components/RecipeDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  
  // Convert id to a number to match the type of recipe IDs
  const recipe = recipes.find((r) => r.id === parseInt(id, 10));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>Preparation Time:</strong> {recipe.preparationTime} minutes</p>
      {/* Display other recipe details here */}
    </div>
  );
};

export default RecipeDetail;
