// src/components/RecipeList.jsx

import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

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
          {/* Link to the recipe details page */}
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
