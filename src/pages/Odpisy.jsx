import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import "../css/styles.css"
import "../css/odpisy.css"

import odpisoveskupiny from "../constants/odpisoveskupiny"

const koeficienty = {
    skupina2: {
        prvyrok: 6,
        dalsieroky: 7,
    },
    skupina3: {
        prvyrok: 8,
        dalsieroky: 9,
    },
    ostatne: "Nemožno odpisovať zrýchlene"
}

const Odpisy = () => {
    const [datumObstarania, setDatumObstarania] = useState(null);
    const [mesiacObstarania, setMesiacObstarania] = useState(null);
    const [rokObstarania, setRokObstarania] = useState(null);
    const [obstaravaciaCena, setObstaravaciaCena] = useState(null);
    const [odpisovaSkupina, setOdpisovaSkupina] = useState(-1);
    const [zrychleneOdpisovanie, setZrychleneOdpisovanie] = useState(false);

    const [vysledky, setVysledky] = useState([]);

    const [dlzkaOdpisovania, setDlzkaOdpisovania] = useState(null);
    const [k1, setK1] = useState(null);
    const [k2, setK2] = useState(null);

    // zmena datumu obstarania
    useEffect(() => {
        setRokObstarania(Number(datumObstarania?.split("-")[0]))
        setMesiacObstarania(Number(datumObstarania?.split("-")[1]))
    }, [datumObstarania]);

    // zmena vstupnych udajov
    useEffect(() => {
        if (
            mesiacObstarania >= 0 && mesiacObstarania <= 12 &&
            rokObstarania > 0 &&
            obstaravaciaCena >= 1700 &&
            odpisovaSkupina >= 0 && odpisovaSkupina <= 6
        ) {
            setK1(odpisoveskupiny[odpisovaSkupina].dobaodpisovania)
            if (mesiacObstarania > 1) {
                setDlzkaOdpisovania(odpisoveskupiny[odpisovaSkupina].dobaodpisovania + 1)
            } else {
                setDlzkaOdpisovania(odpisoveskupiny[odpisovaSkupina].dobaodpisovania)
            }

        }
    }, [rokObstarania, mesiacObstarania, obstaravaciaCena, odpisovaSkupina, zrychleneOdpisovanie]);

    // výpočet výsledkov
    useEffect(() => {
        let rok, vypocet, rocnyOdpis, opravky, zostatkovaCena;
        let priebezneVysledky = []

        for (let i = 0; i < dlzkaOdpisovania; i++) {
            if (i == 0) {
                // prvy rok
                vypocet = "(" + obstaravaciaCena + " : " + k1 + ") : 12 × " + (12 - mesiacObstarania + 1)
                rocnyOdpis = Math.ceil((obstaravaciaCena / k1) / 12 * (12 - mesiacObstarania + 1))
                rok = rokObstarania;
                opravky = rocnyOdpis
                if (!zrychleneOdpisovanie) {
                    // rovnomerne odpisy
                    zostatkovaCena = obstaravaciaCena - rocnyOdpis
                } else {
                    // zrychlene odpisy
                    zostatkovaCena = Math.ceil(obstaravaciaCena - (obstaravaciaCena / k1))
                    if (zrychleneOdpisovanie) {
                        if (odpisovaSkupina == 2) {
                            setK2((koeficienty.skupina2.dalsieroky))
                        } else if (odpisovaSkupina === 3) {
                            setK2((koeficienty.skupina3.dalsieroky))
                        }
                    }
                }
            } else if (i == dlzkaOdpisovania - 1) {
                // posledny rok
                vypocet = "(" + obstaravaciaCena + " : " + k1 + ") : 12 × " + (mesiacObstarania - 1)
                rocnyOdpis = Math.ceil((obstaravaciaCena / k1) / 12 * (mesiacObstarania - 1))
                rok = rokObstarania + i;
                opravky = obstaravaciaCena
                zostatkovaCena = 0
            } else {
                // vsetky ostatne roky
                rok = rokObstarania + i;
                if (!zrychleneOdpisovanie) {
                    // rovnomerne odpisy
                    vypocet = obstaravaciaCena + " : " + k1
                    rocnyOdpis = Math.ceil(obstaravaciaCena / k1)
                } else {
                    // zrychlene odpisy
                    vypocet = "(2 × " + zostatkovaCena + ") / (" + k2 + " - " + i + ")"
                    rocnyOdpis = Math.ceil((2 * zostatkovaCena) / (k2 - i))
                }
                opravky += rocnyOdpis
                zostatkovaCena -= rocnyOdpis

            }

            let novyVysledok = {
                rok: rok,
                vypocet: vypocet,
                rocnyOdpis: rocnyOdpis,
                opravky: opravky,
                zostatkovaCena: zostatkovaCena
            }

            priebezneVysledky.push(novyVysledok)
            setVysledky(priebezneVysledky)
        }
    }, [dlzkaOdpisovania, zrychleneOdpisovanie]);

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"odpisy projekt"}>
            <div className={"odpisynadpisy"}>
                <h2>Odpisy</h2>
                <h4>Daňové odpisy dlhodobého majetku pre potreby účtovníctva</h4>
            </div>
            <div className="odpisyinputy">
                <h3>Vstupné údaje</h3>
                <div>
                    <div>
                        <p>Dátum obstarania</p>
                        <input type="month" onChange={(e) => {
                            setDatumObstarania(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <p>Obstarávacia cena</p>
                        <input type="number" placeholder={"min. 1700€"} min={1700} onChange={(e) => {
                            setObstaravaciaCena(Number(e.target.value))
                        }}/>
                    </div>
                    <div>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            gap: "0.5em"
                        }}>
                            <p>Odpisová skupina</p>
                            <div className={"pomoc"}>?</div>
                        </div>
                        <input type="number" placeholder={"0 - 6"} min={0} max={6} onChange={(e) => {
                            setOdpisovaSkupina(Number(e.target.value))
                        }}/>
                    </div>
                    <div>
                        <p>Metóda odpisovania</p>
                        <button disabled={!(odpisovaSkupina >= 2 && odpisovaSkupina <= 3)} onClick={() => {
                            setZrychleneOdpisovanie(!zrychleneOdpisovanie)
                        }}>
                            {
                                zrychleneOdpisovanie
                                    ? "Zrýchlená"
                                    : "Rovnomerná"
                            }
                        </button>
                    </div>
                </div>
            </div>
            {
                vysledky.length > 1
                    ? <table className={"odpisyvysledky"} style={{paddingTop: "2em"}}>
                        <thead>
                        <tr>
                            <td>Rok</td>
                            <td>Výpočet</td>
                            <td>Ročný odpis</td>
                            <td>Oprávky</td>
                            <td>Zostatková cena</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            vysledky.map((e) => {
                                return (
                                    <tr>
                                        <td>{e.rok}</td>
                                        <td>{e.vypocet}</td>
                                        <td>{e.rocnyOdpis}</td>
                                        <td>{e.opravky}</td>
                                        <td>{e.zostatkovaCena}</td>
                                    </tr>
                                )
                            })

                        }
                        </tbody>
                    </table>
                    : null
            }
        </div>
    );
};

export default Odpisy;
