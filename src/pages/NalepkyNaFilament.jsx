import React, {useEffect, useState} from 'react';
import "../css/styles.css"
import "../css/nalepkynafilament.css"
import threed from "../constants/threed";

const NalepkyNaFilament = () => {
    const [styl, setStyl] = useState(true);
    const [pridat, setPridat] = useState(false);

    const [id, setId] = useState(null);
    const [vyrobca, setVyrobca] = useState(null);
    const [material, setMaterial] = useState(null);
    const [cena, setCena] = useState(null);
    const [farbaNazov, setFarbaNazov] = useState(null);
    const [farbaCode, setFarbaCode] = useState(null);
    const [farbaInvert, setFarbaInvert] = useState(null);
    const [farba2Code, setFarba2Code] = useState(null);
    const [hmotnostSoSpoolom, setHmotnostSoSpoolom] = useState(null);
    const [hmotnostSpool, setHmotnostSpool] = useState(null);
    const [hmotnostPovodna, setHmotnostPovodna] = useState(null);
    const [teplotaMin, setTeplotaMin] = useState(null);
    const [teplotaMax, setTeplotaMax] = useState(null);

    const [vysledok, setVysledok] = useState(null);

    useEffect(() => {
        setVysledok([
            "{",
            "id: " + id + ",",
            "vyrobca: \"" + vyrobca + "\",",
            "material: \"" + material + "\",",
            "cena: " + cena + ",",
            "farba: {",
            "    nazov: \"" + farbaNazov + "\",",
            "    code: \"" + farbaCode + "\",",
            farbaInvert ? "    invert: " + farbaInvert + "," : null,
            "},",
            farba2Code ? "farba2: {" : null,
            farba2Code ? "    code: \"" + farba2Code + "\"" : null,
            farba2Code ? "}," : null,
            "hmotnost: {",
            hmotnostSoSpoolom ? "    soSpoolom: " + hmotnostSoSpoolom + "," : null,
            "    spool: " + hmotnostSpool + ",",
            "    povodna: " + hmotnostPovodna + ",",
            "},",
            "teplota: {",
            "    min: " + teplotaMin + ",",
            "    max: " + teplotaMax + ",",
            "}",
            "},"
        ])
    }, [id, vyrobca, material, cena, farbaNazov, farbaCode, farbaInvert, farba2Code, hmotnostSoSpoolom, hmotnostSpool, hmotnostPovodna, teplotaMin, teplotaMax]);

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | Nálepky na filament"
    }, []);

    return (
        <div className={"nalepkynafilament"}>
            <h2 className={"noprint"}>Nálepky na filament</h2>
            <h4 className={"noprint"}>Vytvorenie štítkov na filamenty</h4>
            <div className={"nalepkynafilamentcontent"}>
                {threed.filamenty.map((f, key) => {
                    return (
                        <div className={(f.farba.invert && styl) ? "filament invert" : "filament"} key={key} style={
                            styl
                                ? f.farba2
                                    ? {backgroundImage: "linear-gradient(45deg, " + f.farba.code + ", " + f.farba2.code + ")"}
                                    : {background: f.farba.code}
                                : null
                        }>
                            <div className="filamentnadpisy">
                                <div className={"filamentfarba"} style={
                                    f.farba2
                                        ? {backgroundImage: "linear-gradient(45deg, " + f.farba.code + ", " + f.farba2.code + ")"}
                                        : {background: f.farba.code}
                                }>
                                    <p className={"filamentporadovecislo"} style={
                                        f.farba.invert
                                            ? styl
                                                ? {color: "white", borderColor: "white"}
                                                : {color: "white", borderColor: "black"}
                                            : styl
                                                ? {color: "black", borderColor: "black"}
                                                : {color: "black", borderColor: "black"}
                                    }>{f.id + 1}</p>
                                </div>
                                <div className={"filamentnadpis"}>
                                    <p>{f.vyrobca + " " + f.material}</p>
                                    <p>{f.farba.nazov}</p>
                                </div>
                            </div>
                            <div className={"filamentinfo"}>
                                <div className={"filamenthmotnostacena"}>
                                    <p>{(f.hmotnost.povodna / 1000)} kg ({f.hmotnost.spool}g spool)</p>
                                    <p>{f.cena.toFixed(2)} €</p>
                                </div>
                                <div className={"filamentteplota"}>
                                    <p style={{height: "1em"}}></p>
                                    <p>{f.teplota.min} - {f.teplota.max}°C</p>
                                </div>
                            </div>
                            <div style={{paddingTop: "1.25em", textAlign: "center", display: "none"}}>
                                <p>https://yungcypo.github.io/3D</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={"filamenttlacitka noprint"}>
                <button onClick={window.print} className={"tlacitbutton"}>Tlačiť</button>
                <button onClick={() => {
                    setStyl(!styl)
                }}>{
                    styl
                        ? "Biele pozadie"
                        : "Farebné pozadie"
                }</button>
                <button disabled={true} onClick={() => {
                    setPridat(!pridat)
                }}>Pridať nový filament
                </button>
            </div>
            {
                pridat
                    ? <div className={"filamentpridat noprint"}>
                        <h3 style={{padding: "1em"}}>Vyplňte nasledujúce údaje pre pridanie nového filamentu: </h3>
                        <div>
                            <div className={"filamentinputy"}>
                                <div>
                                    <p>ID</p>
                                    <input type="text" placeholder={"Napr. 10"} onChange={(e) => {
                                        setId(e.target.value)
                                    }}/>
                                </div>
                                <div>
                                    <p>Výrobca</p>
                                    <input type="text" placeholder={"Napr. Bambu Lab"} onChange={(e) => {
                                        setVyrobca(e.target.value)
                                    }}/>
                                </div>
                                <div>
                                    <p>Materiál</p>
                                    <input type="text" placeholder={"Napr. PLA"} onChange={(e) => {
                                        setMaterial(e.target.value)
                                    }}/>
                                </div>
                                <div>
                                    <p>Cena</p>
                                    <input type="text" placeholder={"Napr. 28.99"} onChange={(e) => {
                                        setCena(e.target.value)
                                    }}/>
                                </div>
                                <div>
                                    <p>Farba - názov</p>
                                    <input type="text" placeholder={"Napr. Čierna"} onChange={(e) => {
                                        setFarbaNazov(e.target.value)
                                    }}/>
                                </div>
                                <div>
                                    <p>Farba - kód</p>
                                    <input type="text" placeholder={"Napr. #000000"} onChange={(e) => {
                                        setFarbaCode(e.target.value)
                                    }}/>
                                </div>
                                <div className={"optional"}>
                                    <p>Farba - invert?</p>
                                    <input type="text" placeholder={"Napr. false"} onChange={(e) => {
                                        setFarbaInvert(e.target.value)
                                    }}/>
                                </div>
                                <div className={"optional"}>
                                    <p>Farba 2 - kôd</p>
                                    <input type="text" placeholder={"Napr. #000000"} onChange={(e) => {
                                        setFarba2Code(e.target.value)
                                    }}/>
                                </div>
                                <div className={"optional"}>
                                    <p>Hmotnosť so spoolom</p>
                                    <input type="text" placeholder={"Napr. 500"} onChange={(e) => {
                                        setHmotnostSoSpoolom(e.target.value)
                                    }}/>
                                </div>
                                <div>
                                    <p>Hmotnosť spool-u</p>
                                    <input type="text" placeholder={"Napr. 250"} onChange={(e) => {
                                        setHmotnostSpool(e.target.value)
                                    }}/>
                                </div>
                                <div>
                                    <p>Hmotnosť pôvodná</p>
                                    <input type="text" placeholder={"Napr. 1000"} onChange={(e) => {
                                        setHmotnostPovodna(e.target.value)
                                    }}/>
                                </div>
                                <div>
                                    <p>Najvyššia teplota</p>
                                    <input type="text" placeholder={"Napr. 190"} onChange={(e) => {
                                        setTeplotaMin(e.target.value)
                                    }}/>
                                </div>
                                <div>
                                    <p>Najnižšia teplota</p>
                                    <input type="text" placeholder={"Napr. 230"} onChange={(e) => {
                                        setTeplotaMax(e.target.value)
                                    }}/>
                                </div>
                                <div style={{display: "flex", alignItems: "end"}}>
                                    <p>*Nepovinné</p>
                                </div>
                            </div>
                            <div className={"filamentvysledok"}>
                                {
                                    vysledok.map((e, key) => {
                                        return (
                                            <p key={key}>{e}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
};

export default NalepkyNaFilament;
