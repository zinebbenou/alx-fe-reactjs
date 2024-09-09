import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-t-lg" />
      <h1 className="text-4xl font-bold mt-4">{recipe.title}</h1>
      <p className="mt-2 text-gray-600">{recipe.summary}</p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside mt-2">
          {/* Example ingredients - update as per actual data */}
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
        <ol className="list-decimal list-inside mt-2">
          {/* Example instructions - update as per actual data */}
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
