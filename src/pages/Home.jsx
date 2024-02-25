import React from 'react';

import Hero from "../components/home/Hero";
import Omne from "../components/home/Omne";
import CasovaOs from "../components/CasovaOs/CasovaOs";

import vzdelanie from "../constants/vzdelanie";

const Home = () => {
    return (
        <div className={"bg-red-50 w-full"}>
            <Hero/>
            <Omne/>
            {
                /*

            <CasovaOs subor={vzdelanie} />
                 */
            }
            <p>Časová Os</p>
            <p>Projekty</p>
        </div>
    );
};

export default Home;