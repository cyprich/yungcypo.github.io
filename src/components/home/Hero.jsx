import React from 'react';

const Hero = () => {
    return (
        <section className={"flex justify-between items-center w-full px-24 py-12 pt-28"}>
            <div>
                <h1 className={"text-7xl font-bold drop-shadow-lg"}>Peter Cyprich</h1>
                <p className={"mt-4 ml-1.5"}>Kto druhému zaseje, tak za z hory ozýva</p>
                <button className={"button button-red mt-4 ml-1"}><p>Zisti viac</p></button>
            </div>
            <img className={"h-96 w-auto opacity-90"} src={require("../../images/opica.png")} alt=""/>
        </section>
    );
};

export default Hero;