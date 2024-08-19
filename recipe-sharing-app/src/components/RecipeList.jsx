// src/components/RecipeList.jsx

import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Trigger filtering when the component renders or the search term changes
  React.useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          {/* Display other recipe details as needed */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
