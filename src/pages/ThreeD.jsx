import React, {useEffect} from 'react';
import "../css/styles.css"
import "../css/threed.css"
import {Link} from "react-router-dom";

const ThreeD = () => {
    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | 3D"
    }, []);

    return (
        <div className={"threed"}>
            <div className={"threednadpisy"}>
                <h2>3D tlač</h2>
                <h4>Zisti viac o mojom hobby</h4>
            </div>
            <div className={"threedprojekty"}>
                <Link to={"/3D/historia"} className={"stavitelstvoprojekt"}>
                    <h3>Ako som sa dostal ku 3D tlači</h3>
                    <h5>Všetko to začalo už v roku 2017...</h5>
                </Link>
                <Link to={"/3D/kalkulacka"} className={"stavitelstvoprojekt"}>
                    <h3>Kalkulačka</h3>
                    <h5>Koľko ma stojí vytlačenie modelu?</h5>
                </Link>
                <Link to={"/3D/modely"} className={"stavitelstvoprojekt"}>
                    <h3>Moje modely</h3>
                    <h5>Modely, ktoré som sám vytvoril</h5>
                </Link>
                <Link to={"/3D/filamenty"} className={"stavitelstvoprojekt"}>
                    <h3>Filamenty</h3>
                    <h5>Filamenty, ktoré mám a z ktorých môžem tlačiť</h5>
                </Link>
            </div>
        </div>
    );
};

export default ThreeD;
