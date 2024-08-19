// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails"; // Adjust this path based on where RecipeDetails is located

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
