import React from 'react';
import Chefs from '../Chefs/Chefs';
import Slider from '../Slider/Slider';
import Cuisines from './Cuisines';
import RecipesPDF from './RecipesPDF';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Chefs></Chefs>
            <Cuisines></Cuisines>
            <RecipesPDF></RecipesPDF>
        </div>
    );
};

export default Home;