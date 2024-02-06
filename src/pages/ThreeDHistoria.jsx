import React from 'react';
import CasovaOs from "../components/CasovaOs";
import threed from "../constants/threed";
import SpatNa from "../components/SpatNa";

const ThreeDHistoria = () => {
    return (
        <>
            <div className={"threedhistoria"}>
                <h2 className={"casovaOsNadpis"}>Ako som sa dostal ku 3D tlači</h2>
                <div>
                    <CasovaOs file={threed}/>
                    <div style={{height: "4em"}}></div>
                </div>
            </div>
            <SpatNa text={"3D tlač"} link={"/3D"}/>
        </>
    );
};

export default ThreeDHistoria;
