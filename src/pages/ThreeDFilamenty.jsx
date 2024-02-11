import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import "../css/styles.css"
import "../css/threed.css"

import threed from "../constants/threed";
import SpatNa from "../components/SpatNa";
import Progressbar from "../components/Progressbar";

import {ReactComponent as ArrowUp} from "../images/icons/arrowup.svg";
import {ReactComponent as ArrowDown} from "../images/icons/arrowdown.svg";
import ImageLoader from "../components/ImageLoader";

const ThreeDFilamenty = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search);
    const navigate = useNavigate()

    const [otocitPoradie, setOtocitPoradie] = useState(false);
    const [zoraditPodla, setZoraditPodla] = useState("default");

    const handleSort = (e) => {
        setZoraditPodla(e.target.value)
    }

    const sortData = () => {
        let vysledok = 0
        return threed.filamenty.slice().sort((a, b) => {
            if (zoraditPodla === "default") {
                vysledok = a.id - b.id
            } else if (zoraditPodla === "abecednefarba") {
                vysledok = a.farba.nazov.localeCompare(b.farba.nazov)
            } else if (zoraditPodla === "abecednevyrobca") {
                vysledok = a.vyrobca.localeCompare(b.vyrobca)
            } else if (zoraditPodla === "cena") {
                vysledok = a.cena - b.cena
            } else if (zoraditPodla === "hmotnost") {
                vysledok = (b.hmotnost.soSpoolom - b.hmotnost.spool) - (a.hmotnost.soSpoolom - a.hmotnost.spool)
            }

            if (otocitPoradie) {
                return -vysledok
            } else {
                return vysledok
            }
        })
    }

    const resetovatHmotnost = () => {
        const sort = zoraditPodla
        const from = params.get("from")
        navigate(location.pathname + "?sort=" + sort + "&from=" + from)
    }

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | 3D | Filamenty"
        if (params.get("sort") != null) {
            setZoraditPodla(params.get("sort"))
        }
    }, []);

    return (
        <>
            <div className={"threedfilamenty"}>
                <div className="threedfilamentynadpisy">
                    <h2>Filamenty</h2>
                    <h4>Filamenty, ktoré mám a z ktorých môžem tlačiť</h4>
                </div>
                <div className="threedfilamentyinput">
                    <p>Zoradiť:</p>
                    <select name="threedfilamentysort" onChange={(e) => {
                        handleSort(e)
                    }}>
                        <option value="default">Predvolené</option>
                        <optgroup>
                            <option value="abecednevyrobca" selected={params.get("sort") === "abecednevyrobca"}>Abecedne - výrobca</option>
                            <option value="abecednefarba" selected={params.get("sort") === "abecednefarba"}>Abecedne - farba</option>
                            <option value="cena" selected={params.get("sort") === "cena"}>Cena</option>
                            <option value="hmotnost" selected={params.get("sort") === "hmotnost"}>Hmotnosť</option>
                        </optgroup>
                    </select>
                    <button onClick={() => {
                        setOtocitPoradie(!otocitPoradie)
                        sortData()
                    }}>
                        {
                            otocitPoradie
                                ? <ArrowDown/>
                                : <ArrowUp/>
                        }
                    </button>
                </div>
                <div className="threedfilamentyfilamenty">
                    {
                        sortData().map((e, key) => {
                            return (
                                <div
                                    //className="threedfilament"
                                    className={
                                        params.get("hmotnost") > (e.hmotnost.soSpoolom - e.hmotnost.spool)
                                            ? "threedfilament disabledfilament"
                                            : "threedfilament"
                                    }
                                    key={key}

                                >
                                    <ImageLoader src={e.obrazky.preview} alt=""/>
                                    <div>
                                        <div>
                                            <div>
                                                <p>{e.vyrobca}</p>
                                                <p>{e.material}</p>
                                                <p>{e.farba.nazov}</p>
                                            </div>
                                            <div>
                                                <p style={{fontSize: "1.25em"}}>{e.cena.toFixed(2)}€</p>
                                                <p className="nevyrazne">za 1 kg</p>
                                            </div>
                                        </div>
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
                {
                    params.get("from")=="kalkulacka" && params.get("hmotnost") > 0
                        ? <button onClick={() => {resetovatHmotnost()}} style={{marginTop: "1em"}}>Resetovať hmotnosť modelu</button>
                        : null
                }
                <p style={{marginTop: "1em"}} className={"nevyrazne"}>
                    Hmotnosti
                    aktualizované: {threed.hmotnostiAktualizovane.den}. {threed.hmotnostiAktualizovane.mesiac}. {threed.hmotnostiAktualizovane.rok}
                </p>
            </div>
            {
                params.get("from") === "kalkulacka"
                    ? <SpatNa text={"Kalkulačku"} link={"/3D/kalkulacka"}/>
                    : <SpatNa text={"3D tlač"} link={"/3D"}/>
            }
        </>
    );
};

export default ThreeDFilamenty;
