// src/components/RecipeDetails.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {isEditing ? (
        <EditRecipeForm
          recipeId={recipeId}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
          <DeleteRecipeButton recipeId={recipeId} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
