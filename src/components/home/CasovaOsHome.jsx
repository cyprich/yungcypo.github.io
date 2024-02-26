import React from 'react';
import vzdelanie from "../../constants/vzdelanie";
import CasovaOs from "../CasovaOs/CasovaOs";

const CasovaOsHome = () => {
    return (
        <section className={"py-8"}>
            <h2 className={"font-bold text-4xl text-center py-8"}>Škola</h2>
            <CasovaOs subor={vzdelanie} />
        </section>
    );
};

export default CasovaOsHome;