import React from 'react';

import Hero from "../components/home/Hero";
import Omne from "../components/home/Omne";
import CasovaOsHome from "../components/home/CasovaOsHome";
import Carousel from "../components/Carousel/Carousel";

import projekty from "../constants/projekty";

const Home = () => {
    return (
        <div className={"bg-red-50 w-full"}>
            <Hero/>
            <Omne/>
            <CasovaOsHome/>
            <Carousel subor={projekty}/>
        </div>
    );
};

export default Home;