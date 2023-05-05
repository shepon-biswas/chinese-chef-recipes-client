import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
  const { name, ingredients, cooking_method, ratings } = recipe;
  
  const favorite = (e) => {
    toast.success("Added as your favorite recipe!")
    e.target.disabled = true;
  };

  // const notify = (e) => {
  //   toast("Added to favorite!");
  //   e.target.disabled = true;
  // }

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
          <div className="card-actions justify-end">
                <button  onClick={favorite} className='btn btn-warning rounded-full flex items-center' title="Mark As Favorite">
                <FaRegHeart className="me-1 h-4 w-4"></FaRegHeart>Favorite
                </button>
                <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
