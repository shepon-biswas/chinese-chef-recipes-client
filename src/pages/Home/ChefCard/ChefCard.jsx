import React from "react";
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";

const ChefCard = ({chef}) => {

  const {name, bio, image, experiences, recipes, likes} = chef;
  return (
    <>
      <div className="">
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <div className="h-[280px]">
            <img
              className="object-fill"
              src={image}
              alt="Shoes"
            />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
          </h2>
          <p className="mb-4">{bio.slice(0, 200)}...</p>
          <hr />
          <div className="flex justify-between items-center">
            <div >
                <h4 className="text-lg font-semibold">Year of Experiences: {experiences}</h4>
                <h4 className="text-lg font-semibold">Number of Recipes: {recipes}</h4>
            </div>
            <div className="text-center">
                <p className="bg-amber-400 p-5 rounded-full mb-2"><FaThumbsUp style={{width:'18px', height:'18px'}}></FaThumbsUp></p>
                <strong>{likes}</strong>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-outline btn-warning my-2">View Recipes  <FaArrowRight className="ms-2"></FaArrowRight> </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ChefCard;
