// src/recipeStore.js

import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Search term for filtering recipes
  searchTerm: '',

  // Set search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filtered recipes based on the search term
  filteredRecipes: [],

  // Filter recipes based on search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),

  // Delete a recipe by ID
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Set initial recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
