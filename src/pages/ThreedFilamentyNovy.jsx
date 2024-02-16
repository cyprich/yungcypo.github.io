import React from 'react';
import "../css/styles.css"
import "../css/threed.css"

import NovyFilamentForm from "../components/NovyFilamentForm";
import SpatNa from "../components/SpatNa";

const ThreedFilamentyNovy = () => {
    return (
        <>
            <div className={"novyfilament projekt"}>
                <div className="novyfilamentnadpisy">
                    <h2>Pridať filament</h2>
                </div>
                <div className="novyfilamentobsah">
                    <NovyFilamentForm/>
                </div>
            </div>
            <SpatNa text={"Filamenty"} link={"/3D/filamenty"}/>
        </>
    );
};

export default ThreedFilamentyNovy;
