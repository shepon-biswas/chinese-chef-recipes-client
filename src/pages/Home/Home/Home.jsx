import React from 'react';
import Chefs from '../Chefs/Chefs';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Chefs></Chefs>
            <h4>This is Homepage</h4>
        </div>
    );
};

export default Home;