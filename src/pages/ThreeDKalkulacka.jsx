import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import "../css/styles.css"
import "../css/threed.css"

import threed from "../constants/threed";
import SpatNa from "../components/SpatNa";
import ImageLoader from "../components/ImageLoader";

const ThreeDKalkulacka = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const param = new URLSearchParams(location.search)

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

    const [kruzky, setKruzky] = useState(0);  // kruzky na kluce
    const [cenaKruzky, setCenaKruzky] = useState(null);
    const [typPrirazky, setTypPrirazky] = useState(false); // false = percenta; true = eura
    const [prirazka, setPrirazka] = useState(null);

    const [cenaCelkovo, setCenaCelkovo] = useState(null);

    const [model, setModel] = useState(null);
    const [forceUpdate, setForceUpdate] = useState(false);

    useEffect(() => {
        if (kruzky < 0) {
            setKruzky(0)
        }
    }, [kruzky]);


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
        setCenaKruzky(kruzky * 0.05)
    }, [kruzky]);


    useEffect(() => {
        if (typPrirazky) {
            setCenaCelkovo(cenaPriamehoMaterialu + cenaElektrika + cenaLabor + prirazka + kruzky * 0.05)
        } else {
            setCenaCelkovo((cenaPriamehoMaterialu + cenaElektrika + cenaLabor + kruzky * 0.05) * (1 + (prirazka / 100)))
        }
    }, [cenaPriamehoMaterialu, cenaElektrika, cenaLabor, prirazka, typPrirazky, kruzky]);


    useEffect(() => {
        if (param.get("model") != null) {
            if (param.get("model") <= threed.modely.length) {
                setModel(threed.modely[param.get("model")])
                setZaKilo(23.90)
                setHmotnost(model?.hmotnost)
                setCasHodiny(model?.cas.hodiny)
                setCasMinuty(model?.cas.minuty)
                setForceUpdate(!forceUpdate)
                if (model?.klucenka) {
                    setKruzky(1)
                }
            } else {
                navigate("/3D/kalkulacka")
            }
        }
    }, [model, param.get("model")]);

    const reset = () => {
        setHmotnost(null)
        setZaKilo(null)
        setCenaPriamehoMaterialu(null)
        setCasHodiny(null)
        setCasMinuty(null)
        setSpotreba(150)
        setCenakvh(0.18)
        setCenaElektrika(null)
        setLaborHodiny(null)
        setLaborMinuty(null)
        setLaborZaHodinu(null)
        setCenaLabor(null)
        setKruzky(0)
        setCenaKruzky(null)
        setTypPrirazky(false)
        setPrirazka(null)
        setCenaCelkovo(null)
        setModel(null)

        navigate("/3D/kalkulacka")
        window.scrollTo(0, 0)
    }

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
                    <p className={"nevyrazne"}>
                        Vyplň nasledovné údaje alebo stlač ikonku kalkulačky pri jednom z
                        <span onClick={() => {
                            navigate("/3D/modely")
                        }}> mojich modelov</span>
                    </p>
                </div>
                <div className={"threedkalkobsah"}>
                    <div className="threedkalkinputy">
                        <div>
                            <h3>1. Priamy materiál</h3>
                            <div className="threedkalkinput">
                                <p>Hmotnosť výtlačku <span className={"nevyrazne"}>[g]</span></p>
                                <input
                                    type="number"
                                    placeholder={"g"}
                                    onChange={(e) => {
                                        setHmotnost(Number(e.target.value))
                                    }}
                                    value={hmotnost || ""}
                                />
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
                                                            selected={model != null && e.farba.nazov == "Biela"}
                                                        >
                                                            {e.farba.nazov + " - " + e.cena.toFixed(2) + "€ / kg"}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </optgroup>
                                    </select>
                                    <button onClick={() => {
                                        if (hmotnost != null) {
                                            navigate("/3D/filamenty?sort=hmotnost&from=kalkulacka&hmotnost=" + hmotnost)
                                        } else {
                                            navigate("/3D/filamenty?sort=cena&from=kalkulacka")
                                        }
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
                                    <input
                                        type="number"
                                        placeholder={"Hodiny"}
                                        onChange={(e) => {
                                            setCasHodiny(Number(e.target.value))
                                        }}
                                        value={casHodiny || ""}
                                    />
                                    <input
                                        type="number"
                                        placeholder={"Minúty"}
                                        onChange={(e) => {
                                            setCasMinuty(Number(e.target.value))
                                        }}
                                        value={casMinuty || ""}
                                    />
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
                                        <h4>Cena práce: <span className="vyrazne">{cenaLabor?.toFixed(2) + "€"}</span>
                                        </h4>
                                        : null
                                }
                            </div>
                        </div>
                        <div>
                            <h3>4. Ostatné</h3>
                            <div className="threedkalkinput">
                                <p>Krúžky na klúče <span className="nevyrazne">[ks]</span></p>
                                <div>
                                    <div>
                                        <input
                                            type="number"
                                            placeholder={"ks"}
                                            value={kruzky > 0 ? kruzky : ""}
                                            onChange={(e) => {
                                                setKruzky(Number(e.target.value))
                                            }}
                                        />
                                        <button className="smallbutton" onClick={() => {
                                            setKruzky(kruzky + 1)
                                        }}>+
                                        </button>
                                        <button className="smallbutton" style={{marginLeft: "0.25em"}} onClick={() => {
                                            setKruzky(kruzky - 1)
                                        }}>-
                                        </button>
                                    </div>
                                </div>
                                {
                                    cenaKruzky > 0 &&
                                    <h4 style={{margin: "0.25em 0"}}>Cena za krúžky na klúče: <span
                                        className="vyrazne">{cenaKruzky?.toFixed(2)}€</span>
                                    </h4>
                                }
                            </div>
                            <div className="threedkalkinput">
                                <p>Cenová prirážka <span className="nevyrazne">[{typPrirazky ? "€" : "%"}]</span></p>
                                <div>
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
                        </div>
                        <div>
                            <h3>Konečná cena: <span className="vyrazne underline">{cenaCelkovo?.toFixed(2) + "€"}</span>
                            </h3>
                        </div>
                        <button
                            onClick={() => {
                                reset()
                            }}
                            style={{width: "max-content"}}
                        >Reset
                        </button>
                    </div>
                    {
                        model && <div className={"threedkalkmodel"}>
                            <h4>{model.nazov}</h4>
                            <ImageLoader src={model.obrazok} alt=""/>
                            <div>
                                Stiahnuť na:
                                {
                                    model.linky.printables && <Link to={model.linky.printables} target={"_blank"}>
                                        <img src={require("../images/icons/socials/printables_white.png")} alt=""/>
                                    </Link>
                                }
                                {
                                    model.linky.makerworld && <Link to={model.linky.makerworld} target={"_blank"}>
                                        <img src={require("../images/icons/socials/makerworld_white.png")} alt=""/>
                                    </Link>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
            <SpatNa text={"3D tlač"} link={"/3D"}/>
        </>
    );
};

export default ThreeDKalkulacka;
