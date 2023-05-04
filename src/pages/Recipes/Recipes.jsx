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
      const data = await (await fetch(`https://chinese-chef-recipe-server.vercel.app/chefs`)).json();
      const newSingleChef = data.find((c) => c.id == ID);
      setSinglechef(newSingleChef);
      setLoading(false);
    };
    datafetch();
  }, []);

  if (loading){
    return <progress className="progress w-56 text-center"></progress>;
  }
  console.log(singleChef);

  return (
    <>
      <div className="bg-amber-100">
        {/* Banner Section */}
        <div className=" w-full md:w-10/12 mx-auto grid md:grid-cols-2 py-5">
          <div className="px-4 md:px-2">
            <h3 className="text-3xl font-bold my-5">{singleChef?.name}</h3>
            <p className="w-full md:w-5/6">{singleChef?.bio}</p>
            <p className="font-semibold text-xl my-1  ">Years of Experiences: {singleChef?.experiences}</p>
            <p className="font-semibold text-xl my-1  ">Total Likes: {singleChef?.likes}</p>
          </div>
          <div className=" px-4 py-5">
            <img className="rounded-lg object-cover" src={singleChef?.image} alt="chef img" />
          </div>
        </div>
      </div>
      <div className=" w-11/12 md:w-10/12 mx-auto ">
        {/* Title & Decsription Section */}
        <div className="text-center text-3xl my-8 font-bold ">
          <h2>
            Here are some <span className="text-amber-400"> delicious </span>
            recipes from{" "}
            <span className="text-amber-400">{singleChef?.name}</span>
          </h2>
        </div>
        {/* Chef's Recipes Section */}
        <div className="grid md:grid-cols-1 gap-6 my-12 px-3 md:px-0">
          {chefRecipes && chefRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipes;
