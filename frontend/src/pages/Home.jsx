import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/v1/recipes/");
        console.log(res.data.data);
        setRecipes(res.data.data.recipes)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, []);

  return (
    <div className="mt-50 mx-10 flex flex-col gap-5 flex-wrap ">
      <header className="max-w-7xl mx-auto mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Recipes</h1>
        <p className="text-gray-600 text-sm">Find something to cook today</p>
      </header>
      <div className="bg-gray-50 p-4 mx-auto grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
