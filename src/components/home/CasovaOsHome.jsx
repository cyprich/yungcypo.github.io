import React from 'react';
import vzdelanie from "../../constants/vzdelanie";
import CasovaOs from "../CasovaOs/CasovaOs";
import Echo from "../Echo";

const CasovaOsHome = () => {
    return (
        <section className={"py-8"}>
            <div className={"py-12"}>
                <Echo text={"Moje Vzdelanie"}/>
            </div>
            <CasovaOs subor={vzdelanie}/>
        </section>
    );
};

export default CasovaOsHome;