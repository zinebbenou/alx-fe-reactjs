// src/components/RecipeDetails.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Add EditRecipeForm and DeleteRecipeButton components here */}
    </div>
  );
};

export default RecipeDetails;
