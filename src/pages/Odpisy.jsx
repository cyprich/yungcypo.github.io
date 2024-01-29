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
    const dnes = new Date();
    const dnesnyMesiac = dnes.getMonth() + 1;
    const dnesnyRok = dnes.getFullYear();

    const [cena, setCena] = useState(null);
    const [datum, setDatum] = useState(null);
    const [skupina, setSkupina] = useState(null);
    const [zrychlenaMetoda, setZrychlenaMetoda] = useState(false);

    const [pomockaSkupiny, setPomockaSkupiny] = useState(false);
    const [pomockaKoeficienty, setPomockaKoeficienty] = useState(false);
    const [rozbalenaPomockaSkupiny, setRozbalenaPomockaSkupiny] = useState(null);
    const handleClickSkupiny = (e) => {
        if (rozbalenaPomockaSkupiny === e) {
            setRozbalenaPomockaSkupiny(null)

        } else {
            setRozbalenaPomockaSkupiny(e)
        }
    }

    return (
        <div className={"odpisy projekt"}>
            <h2>Odpisy</h2>
            <h4>Daňové odpisy dlhodobého majetku pre potreby účtovníctva</h4>
            <div className="odpisyinputy">
                <div className={"odpisyinput"}>
                    <p>Zadaj mesiac obstarania</p>
                    <input
                        type="month"
                        onChange={(e) => {
                            setDatum(e.target.value)
                        }}/>
                </div>
                <div className={"odpisyinput"}>
                    <p>Zadaj vstupnú cenu</p>
                    <input type="number" onChange={(e) => {
                        setCena(e.target.value)
                    }}/>
                    {
                        (cena !== null && cena < 1700)
                            ? <p><i>Vstupná cena odpisovaného majetku musí byť minimálne 1700€ (2400€ pri nehmotnom
                                majetku)</i></p>
                            : null
                    }
                </div>
                <div className={"odpisyinput"}>
                    <p>Zadaj odpisovú skupinu</p>
                    <input type="number" min={0} max={6} placeholder={"0 - 6"} onChange={(e) => {
                        setSkupina(e.target.value)
                    }}/>
                    <p className={"pomockaskupinybutton"} onClick={() => {
                        setPomockaSkupiny(!pomockaSkupiny);
                        setPomockaKoeficienty(null)
                    }}>?</p>
                </div>
                {
                    (skupina == 2 || skupina == 3)
                        ? <div className="odpisyinput">
                            <button
                                onClick={() => {
                                    setZrychlenaMetoda(!zrychlenaMetoda)
                                }}
                            >
                                {zrychlenaMetoda ? "Zrýchlená" : "Rovnomerná"}
                            </button>
                        </div>
                        : null
                }
            </div>
            {
                (datum && cena >= 1700 && skupina >= 0 && skupina <= 6)
                    ? <div className={"odpisyvypocet"}>
                        {/*TODO*/}
                    </div>
                    : <p>Zadajte potrebné údaje</p>
            }
            <div>

                <p className={"pomockakoeficientybutton"} onClick={() => {
                    setPomockaKoeficienty(!pomockaKoeficienty);
                    setPomockaSkupiny(null)
                }}>?</p>
            </div>
            <div className={"odpisypomocka"}>
                {
                    pomockaSkupiny
                        ? <div className="pomockaskupiny">
                            <table>
                                <thead>
                                <tr>
                                    <td colSpan={4}>Odpisové skupiny</td>
                                </tr>
                                <tr>
                                    <td>Číslo skupiny</td>
                                    <td>Doba odpisovania</td>
                                    <td>Možnosť zrýchleného odpisovania</td>
                                    <td>Čo sem zaraďujeme</td>
                                </tr>
                                </thead>
                                <tbody>
                                {odpisoveskupiny.map((e, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{e.cislo}</td>
                                            <td>{e.dobaodpisovania} {e.dobaodpisovaniapripona}</td>
                                            {
                                                e.zrychlene
                                                    ? <td>Áno</td>
                                                    : <td>-</td>
                                            }
                                            <td onClick={() => {
                                                handleClickSkupiny(e.cislo)
                                            }}>
                                                {
                                                    rozbalenaPomockaSkupiny === e.cislo
                                                        ? <ul>
                                                            {e.coodpisujeme.map((f, key) => {
                                                                return (
                                                                    <li key={key}>{f}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                        : <p>...</p>
                                                }

                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan={4}>Zdroj: <Link
                                        to={"https://www.podnikajte.sk/odpisy/zaradovanie-majetku-do-odpisovych-skupin-2022-2023"}
                                        target={"_blank"}>
                                        podnikajte.sk
                                    </Link></td>
                                </tr>
                                <tr onClick={() => {
                                    setPomockaSkupiny(null)
                                }}>
                                    <td colSpan={4}>Zbaliť</td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        : null
                }
                {
                    pomockaKoeficienty
                        ? <div className="pomockakoeficienty">
                            <table>
                                <thead>
                                <tr>
                                    <td colSpan={3}>Koeficienty pri zrýchlenom odpisovaní</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>Odpisová skupina</td>
                                    <td colSpan={2}>Koeficient</td>
                                </tr>
                                <tr>
                                    <td>V prvom roku odpisovania</td>
                                    <td>V ďalších rokoch odpisovania</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0 - 1</td>
                                    <td colSpan={2}>{koeficienty.ostatne}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{koeficienty.skupina2.prvyrok}</td>
                                    <td>{koeficienty.skupina2.dalsieroky}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>{koeficienty.skupina3.prvyrok}</td>
                                    <td>{koeficienty.skupina3.dalsieroky}</td>
                                </tr>
                                <tr>
                                    <td>4 - 6</td>
                                    <td colSpan={2}>{koeficienty.ostatne}</td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr onClick={() => {
                                    setPomockaKoeficienty(null)
                                }}>
                                    <td colSpan={4}>Zbaliť</td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        : null
                }
            </div>
        </div>
    );


};

export default Odpisy;
