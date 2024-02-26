import React from 'react';

import Hero from "../components/home/Hero";
import Omne from "../components/home/Omne";
import CasovaOsHome from "../components/home/CasovaOsHome";


const Home = () => {
    return (
        <div className={"bg-red-50 w-full"}>
            <Hero/>
            <Omne/>
            <CasovaOsHome />
            <p>Projekty</p>
        </div>
    );
};

export default Home;