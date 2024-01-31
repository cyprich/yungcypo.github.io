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
        console.log("\n\ncheckpoint1;  " + dlzkaOdpisovania)
        let rok, vypocet, rocnyOdpis, opravky, zostatkovaCena;
        let priebezneVysledky = []

        for (let i = 0; i < dlzkaOdpisovania; i++) {
            if (i == 0) {
                // prvy rok
                vypocet = "(" + obstaravaciaCena + " : " + k1 + ") : 12 × " + (12 - mesiacObstarania + 1)
                rocnyOdpis = Math.ceil((obstaravaciaCena / k1) / 12 * (12 - mesiacObstarania + 1))
                rok = rokObstarania;
                opravky = rocnyOdpis
                zostatkovaCena = obstaravaciaCena - rocnyOdpis
            } else if (i == dlzkaOdpisovania - 1) {
                // posledny rok
                vypocet = "(" + obstaravaciaCena + " : " + k1 + ") : 12 × " + (mesiacObstarania - 1)
                rocnyOdpis = Math.ceil((obstaravaciaCena / k1) / 12 * (mesiacObstarania - 1))
                rok = rokObstarania + i;
                opravky = obstaravaciaCena
                zostatkovaCena = 0
            } else {
                // ostatne roky
                vypocet = obstaravaciaCena + " : " + k1
                rocnyOdpis = Math.ceil(obstaravaciaCena / k1)
                rok = rokObstarania + i;
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
            <div className="odpisyinputy">
                <div>
                    <h3>Dátum obstarania</h3>
                    <input type="month" onChange={(e) => {
                        setDatumObstarania(e.target.value)
                    }}/>
                </div>
                <div>
                    <h3>Obstarávacia cena</h3>
                    <input type="number" placeholder={"min. 1700€"} onChange={(e) => {
                        setObstaravaciaCena(Number(e.target.value))
                    }}/>
                </div>
                <div>
                    <h3>Odpisová skupina</h3>
                    <input type="number" placeholder={"0 - 6"} onChange={(e) => {
                        setOdpisovaSkupina(Number(e.target.value))
                    }}/>
                </div>
                <div>
                    <h3>Metóda odpisovania</h3>
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
