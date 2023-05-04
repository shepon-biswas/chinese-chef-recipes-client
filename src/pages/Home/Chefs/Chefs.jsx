import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('https://chinese-chef-recipe-server.vercel.app/chefs')
        .then(res =>res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    })
    return (
        <>
            <div className='md:w-10/12 mx-auto my-10 md:my-20'>
                {/* Title Section */}
                <div className='text-center p-5 md:p-0 '>
                <h4 className='text-center text-4xl font-bold my-4'>Meet Our <span className='text-amber-400'>Outstanding Chefs!!!</span></h4>
                <p className='text-gray-600 md:w-2/3 mx-auto'>Chefs are culinary professionals trained in all aspects of food preparation. Their main responsibilities include planning menus, overseeing the kitchen staff, and ensuring that the food meets high-quality standards.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-6 my-12 px-3 md:px-0'>
                    {
                        chefs.map(chef => 
                        <ChefCard
                            key = {chef.id}
                            chef = {chef}
                        >
                        </ChefCard> )
                    }

                </div>
            </div>
        </>
    );
};

export default Chefs;