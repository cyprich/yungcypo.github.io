import React from 'react';

import Hero from "../components/home/Hero";
import Omne from "../components/home/Omne";
import CasovaOsHome from "../components/home/CasovaOsHome";
import Projekty from "../components/home/Projekty";

const Home = () => {
    return (
        <div className={"bg-red-50 w-full"}>
            <Hero/>
            <Omne/>
            <CasovaOsHome/>
            <Projekty/>
        </div>
    );
};

export default Home;