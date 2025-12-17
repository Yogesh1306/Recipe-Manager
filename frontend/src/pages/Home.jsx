import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

const recipesData = [
  {
    id: 1,
    title: "Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1604908177522-402c1f4f47b2",
    time: "30 mins",
  },
  {
    id: 2,
    title: "Veg Biryani",
    image: "https://images.unsplash.com/photo-1600628422019-5a8f2c6f1f4a",
    time: "45 mins",
  },
  {
    id: 3,
    title: "Pasta Alfredo",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    time: "25 mins",
  },
];

const Home = () => {
  const [recipes] = useState(recipesData);
  return (
    <div className="mt-50 mx-10 flex flex-col gap-5 flex-wrap ">
      <header className="max-w-7xl mx-auto mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Recipes</h1>
        <p className="text-gray-600 text-sm">Find something to cook today</p>
      </header>
      <div className="flex ">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
