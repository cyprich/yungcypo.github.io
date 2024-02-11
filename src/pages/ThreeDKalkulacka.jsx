import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import "../css/styles.css"
import "../css/threed.css"

import threed from "../constants/threed";
import SpatNa from "../components/SpatNa";

const ThreeDKalkulacka = () => {
    const navigate = useNavigate()

    const [hmotnost, setHmotnost] = useState(null);
    const [zaKilo, setZaKilo] = useState(null);
    const [cenaPriamehoMaterialu, setCenaPriamehoMaterialu] = useState(null);

    const [casHodiny, setCasHodiny] = useState(null);
    const [casMinuty, setCasMinuty] = useState(null);
    const [spotreba, setSpotreba] = useState(150);
    const [cenakvh, setCenakvh] = useState(0.18);
    const [cenaElektrika, setCenaElektrika] = useState(null);

    const [laborHodiny, setLaborHodiny] = useState(null);
    const [laborMinuty, setLaborMinuty] = useState(null);
    const [laborZaHodinu, setLaborZaHodinu] = useState(null);
    const [cenaLabor, setCenaLabor] = useState(null);

    const [typPrirazky, setTypPrirazky] = useState(false); // false = percenta; true = eura
    const [prirazka, setPrirazka] = useState(null);

    const [cenaCelkovo, setCenaCelkovo] = useState(null);

    useEffect(() => {
        setCenaPriamehoMaterialu(Math.round((hmotnost / 1000 * zaKilo) * 100) / 100)
    }, [hmotnost, zaKilo]);

    useEffect(() => {
        setCenaElektrika(Math.round((spotreba / 1000) * cenakvh * (casHodiny + (casMinuty / 60)) * 100) / 100)
    }, [casHodiny, casMinuty, spotreba, cenakvh]);

    useEffect(() => {
        setCenaLabor(Math.round(laborZaHodinu * (laborHodiny + (laborMinuty / 60)) * 100) / 100)
    }, [laborHodiny, laborMinuty, laborZaHodinu]);

    useEffect(() => {
        if (typPrirazky) {
            setCenaCelkovo(cenaPriamehoMaterialu + cenaElektrika + cenaLabor + prirazka)
        } else {
            setCenaCelkovo((cenaPriamehoMaterialu + cenaElektrika + cenaLabor) * (1 + (prirazka / 100)))
        }
    }, [cenaPriamehoMaterialu, cenaElektrika, cenaLabor, prirazka, typPrirazky]);

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | 3D | Kalkulačka"
    }, []);

    return (
        <>
            <div className={"threedkalk"}>
                <div className="threedkalknadpisy">
                    <h2>Kalkulačka</h2>
                    <h4>Koľko ma stojí vytlačenie modelu?</h4>
                </div>
                <div className="threedkalkinputy">
                    <div>
                        <h3>1. Priamy materiál</h3>
                        <div className="threedkalkinput">
                            <p>Hmotnosť výtlačku <span className={"nevyrazne"}>[g]</span></p>

                            <input type="number" placeholder={"g"} onChange={(e) => {
                                setHmotnost(Number(e.target.value))
                            }}/>
                        </div>
                        <div className={"threedkalkinput"}>
                            <p>Cena za 1kg materiálu</p>
                            <div className="threedkalkfilamenty">
                                <select
                                    onChange={(e) => {
                                        setZaKilo(Number(e.target.value))
                                    }}
                                >
                                    <option value={null}>Vyber z dostupných materiálov</option>
                                    <optgroup>
                                        {
                                            threed.filamenty.map((e, key) => {
                                                return (
                                                    <option
                                                        value={e.cena}
                                                        key={key}
                                                        disabled={((e.hmotnost.soSpoolom - e.hmotnost.spool) < hmotnost)}
                                                    >
                                                        {e.farba.nazov + " - " + e.cena.toFixed(2) + "€ / kg"}
                                                    </option>
                                                )
                                            })
                                        }
                                    </optgroup>
                                </select>
                                <button onClick={() => {
                                    navigate("/3D/filamenty?sort=cena&from=kalkulacka")
                                }}>Filamenty
                                </button>
                            </div>
                        </div>
                        {
                            cenaPriamehoMaterialu >= 0.01
                                ? <h4>Cena priameho materiálu: <span
                                    className="vyrazne">{cenaPriamehoMaterialu?.toFixed(2) + "€"}</span></h4>
                                : null
                        }
                    </div>
                    <div>
                        <h3>2. Elektrická energia</h3>
                        <div className="threedkalkinput">
                            <p>Čas tlače</p>
                            <div>
                                <input type="number" placeholder={"Hodiny"} onChange={(e) => {
                                    setCasHodiny(Number(e.target.value))
                                }}/>
                                <input type="number" placeholder={"Minúty"} onChange={(e) => {
                                    setCasMinuty(Number(e.target.value))
                                }}/>
                            </div>
                        </div>
                        <div className="threedkalkinput">
                            <p>Spotreba <span className="nevyrazne">[W]</span></p>
                            <input
                                type="number"
                                placeholder={"W"}
                                onChange={(e) => {
                                    setSpotreba(e.target.value)
                                }}
                                value={spotreba && spotreba}
                            />
                        </div>
                        <div className="threedkalkinput">
                            <p>Cena elektrickej energie <span className="nevyrazne">[€ / kWh]</span></p>
                            <input
                                type="number"
                                placeholder={"€ / kWh"}
                                onChange={(e) => {
                                    setCenakvh(e.target.value)
                                }}
                                value={cenakvh && cenakvh}
                            />
                        </div>
                        {
                            cenaElektrika >= 0.01
                                ? <h4>Cena za elektrickú energiu: <span
                                    className="vyrazne">{cenaElektrika?.toFixed(2) + "€"}</span></h4>
                                : null
                        }
                    </div>
                    <div>
                        <h3>3. Cena práce</h3>
                        <div className="threedkalkinput">
                            <p>Čas prípravy tlače, Post-Processing, modelovanie, ...</p>
                            <div>
                                <input type="number" placeholder={"Hodiny"} onChange={(e) => {
                                    setLaborHodiny(Number(e.target.value))
                                }}/>
                                <input type="number" placeholder={"Minúty"} onChange={(e) => {
                                    setLaborMinuty(Number(e.target.value))
                                }}/>
                            </div>
                        </div>
                        <div className="threedkalkinput">
                            <p>Hodinová sadzba <span className="nevyrazne">[€ / hod.]</span></p>
                            <div>
                                <input
                                    type="number"
                                    placeholder={"€ / hod."}
                                    onChange={(e) => {
                                        setLaborZaHodinu(Number(e.target.value))
                                    }}
                                />
                                {
                                    laborZaHodinu > 0 && laborZaHodinu < 5
                                        ?
                                        <img src={require("../images/emoji/sad.png")} alt=""
                                             style={{height: "2.25em"}}/>
                                        : null
                                }
                            </div>
                            {
                                cenaLabor >= 0.01
                                    ?
                                    <h4>Cena práce: <span className="vyrazne">{cenaLabor?.toFixed(2) + "€"}</span></h4>
                                    : null
                            }
                        </div>
                    </div>
                    <div>
                        <h3>4. Ostatné</h3>
                        <div className="threedkalkinput">
                            <p>Cenová prirážka <span className="nevyrazne">[{typPrirazky ? "€" : "%"}]</span></p>
                            <div>
                                <input
                                    type="number"
                                    placeholder={typPrirazky ? "€" : "%"}
                                    onChange={(e) => {
                                        setPrirazka(Number(e.target.value))
                                    }}
                                />
                                <button className={"smallbutton"} onClick={(e) => {
                                    setTypPrirazky(!typPrirazky)
                                }}>{typPrirazky ? "€" : "%"}</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Konečná cena: <span className="vyrazne underline">{cenaCelkovo?.toFixed(2) + "€"}</span>
                        </h3>
                    </div>
                </div>
                <div>
                    <button onClick={() => {
                        window.location.reload()
                    }}>Reset
                    </button>
                </div>
            </div>
            <SpatNa text={"3D tlač"} link={"/3D"}/>
        </>
    );
};

export default ThreeDKalkulacka;
