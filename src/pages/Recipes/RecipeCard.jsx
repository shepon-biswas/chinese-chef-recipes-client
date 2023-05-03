import React from "react";
import { FaRegHeart } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const { name, ingredients, cooking_method, ratings } = recipe;

  return (
    <>
      <div className="p-5 border border-amber-400 rounded">
        <h3 className="font-bold text-xl text-center mb-3">{name}</h3>
        <hr />
        <div className="grid md:grid-cols-2">
          <div>
            <h5 className="my-3 text-lg font-semibold">Ingredients: </h5>
            {ingredients.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </div>
          <div>
            <h5 className="my-3 text-lg font-semibold">Cooking Method: </h5>
            {cooking_method.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </div>
        </div>
        <hr className="my-3" />
        {/*Card Footer */}
        <div className="flex justify-between items-center">
          <p className="font-semibold">Ratings: {ratings}</p>
          <p className="bg-amber-400 p-5 rounded-full mb-2">
            <FaRegHeart className="w-full"></FaRegHeart>
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
