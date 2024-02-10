import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import "../css/styles.css"
import "../css/stavitelstvo.css"

const Stavitelstvo = () => {

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | Staviteľstvo"
    }, []);

    return (
        <div className={"stavitelstvo"}>
            <div className="stavitelstvonadpisy">
                <h2>Staviteľstvo a stavebná mechanika</h2>
                <h4>Vyber si jeden z nasledujúcich projektov</h4>
            </div>
            <div className={"stavitelstvoprojekty"}>
                <Link to={"/schodisko"} className={"stavitelstvoprojekt"}>
                    <h3>Schodisko</h3>
                    <h5>Výpočet potrebných údajov k navrhnutiu schodiska</h5>
                </Link>
                <Link to={"/zatazenie"} className="stavitelstvoprojekt">
                    <h3>Zaťaženie</h3>
                    <h5>Výpočet zaťaženia na strop alebo strechu</h5>
                </Link>
                <Link to={"/vystuz"} className="stavitelstvoprojekt">
                    <h3>Výstuž</h3>
                    <h5>Návrh výstuže do jednoduchej dosky</h5>
                </Link>
            </div>
        </div>

    );
};

export default Stavitelstvo;
