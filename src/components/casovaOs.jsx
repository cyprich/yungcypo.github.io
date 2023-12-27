import React from 'react';

import "../css/styles.css"
import "../css/casovaOs.css"

import vzdelanie from "../constants/vzdelanie";


const CasovaOs = () => {
    return (
        <>
            <h3 className={"casovaOsNadpis"}>Moje vzdelanie</h3>
            <div className={"casovaOs"}>
                {vzdelanie.map(e => {
                    return (
                        <div className={"casovaOsElement"}>
                            <div>
                                <h4><span>{e.skola}</span>, {e.mesto}</h4>
                                <p>{e.fakulta}</p>
                                <p>{e.odbor}</p>
                                <p>{e.datum}</p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    );
};

export default CasovaOs;
