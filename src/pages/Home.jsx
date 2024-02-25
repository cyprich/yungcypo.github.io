import React from 'react';

import Hero from "../components/home/Hero";
import Omne from "../components/home/Omne";

const Home = () => {
    return (
        <div className={"bg-red-50 w-full"}>
            <Hero/>
            <Omne/>
        </div>
    );
};

export default Home;