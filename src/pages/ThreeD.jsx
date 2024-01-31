import React, {useEffect} from 'react';
import "../css/styles.css"
import "../css/threed.css"

import CasovaOs from "./CasovaOs";

import threed from "../constants/threed";

const ThreeD = () => {
    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"threed projekt"}>
            <h2>3D tlač</h2>
            <h5 style={{display: "flex", gap: "0.5em"}}>

            </h5>
            <div className={"threedcasovaos"}>
                <h3 className={"casovaOsNadpis"}>Ako som sa dostal ku 3D tlači</h3>
                <CasovaOs file={threed}/>
            </div>
        </div>
    );
};

export default ThreeD;
