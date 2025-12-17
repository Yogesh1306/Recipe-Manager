// import { useState } from "react";

const RecipeCard = ({ recipe }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className=" bg-gray-50 p-4">
      

      <main className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          key={recipe.id}
          className="bg-white w-[25vw] rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {recipe.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Cook time: {recipe.time}
            </p>

            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg text-sm hover:bg-orange-600">
              View Recipe
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeCard;
