import React, {useEffect, useState} from 'react';
import "../css/styles.css"
import "../css/threed.css"

import threed from "../constants/threed";
import SpatNa from "../components/SpatNa";
import Progressbar from "../components/Progressbar";

const ThreeDFilamenty = () => {
    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className={"threedfilamenty"}>
                <div className="threedfilamentynadpisy">
                    <h2>Filamenty</h2>
                    <h4>Filamenty, ktoré mám a z ktorých môžem tlačiť</h4>
                </div>
                <div className="threedfilamentyfilamenty">
                    {
                        threed.filamenty.map((e, key) => {
                            return (
                                <div className="threedfilament" key={key}>
                                    <img src={e.obrazky.preview} alt=""/>
                                    <div>
                                        <p>{e.vyrobca}</p>
                                        <p>{e.material}</p>
                                        <p>{e.farba.nazov}</p>
                                        <p>{e.cena}€ / kg</p>
                                        <Progressbar
                                            farba={e.farba.code}
                                            invert={e.farba.invert}
                                            value={(e.hmotnost.soSpoolom - e.hmotnost.spool) / e.hmotnost.povodna * 100}
                                            text={e.hmotnost.soSpoolom - e.hmotnost.spool + "g"}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <SpatNa text={"3D tlač"} link={"/3D"}/>
        </>
    );
};

export default ThreeDFilamenty;
