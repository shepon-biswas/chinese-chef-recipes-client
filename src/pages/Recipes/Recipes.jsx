import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  // const {id} = useParams();
  const chefRecipes = useLoaderData();
  const chefID = [...chefRecipes];
  const ID = chefID[0].chef_id;
  console.log(ID);
  console.log(chefID);

  const [loading, setLoading] = useState(true);
  const [singleChef, setSinglechef] = useState({});

  useEffect(() => {
    const datafetch = async () => {
      const data = await (await fetch(`http://localhost:5000/chefs`)).json();
      const newSingleChef = data.find((c) => c.id == ID);
      setSinglechef(newSingleChef);
      setLoading(false);
    };
    datafetch();
  },[]);
  
  if (loading) {
    return <progress className="progress w-56 text-center"></progress>;
  }
  console.log(singleChef);

  return (
    <>
      <div className=" w-11/12 md:w-10/12 mx-auto ">
        {/* Banner Section */}
        <div className="h-60 bg-orange-300">
          <h3>Banner section will goes here</h3>
        </div>
        {/* Title & Decsription Section */}
        <div className="text-center text-4xl my-8 font-bold ">
          <h2>
            Here are some <span className="text-amber-400"> delicious </span>
            recipes
          </h2>
        </div>
        {/* Chef's Recipes Section */}
        <div className="grid md:grid-cols-1 gap-6 my-12 px-3 md:px-0">
          {chefRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipes;
