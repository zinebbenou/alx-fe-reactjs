// src/components/RecipeDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = useRecipeStore(state => state.recipes);
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <p>Preparation Time: {recipe.prepTime} minutes</p>
    </div>
  );
};

export default RecipeDetail;
