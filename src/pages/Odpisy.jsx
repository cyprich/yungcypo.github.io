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

    // TODO nastavit na null (skupinu na -1)
    const [cena, setCena] = useState(1700);
    const [datum, setDatum] = useState(null);
    const [skupina, setSkupina] = useState(-1);
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

    const [vysledok, setVysledok] = useState([]);
    const [rokObstarania, setRokObstarania] = useState(null);
    const [mesiacObstarania, setMesiacObstarania] = useState(null);
    const [dlzkaOdpisovania, setDlzkaOdpisovania] = useState(null);
    const [pocetRokov, setPocetRokov] = useState(null);

    useEffect(() => {
        if (datum && cena >= 1700 && skupina >= 0 && skupina <= 6) {
            const [receivedYear, receivedMonth] = datum?.split('-');
            setMesiacObstarania(receivedMonth + 1);
            setRokObstarania(receivedYear)
            console.log(mesiacObstarania)
            console.log(rokObstarania)

            setDlzkaOdpisovania(
                skupina
                    ? odpisoveskupiny[skupina].dobaodpisovania
                    : null
            )

            setPocetRokov(dlzkaOdpisovania)
            if (mesiacObstarania > 1) {
                setPocetRokov(pocetRokov + 1)
            }

            for (let i = 0; i < pocetRokov; i++) {

                console.log("nic take")
                setVysledok([...vysledok, "ahoj"])
            }

            console.log(vysledok)

        }

    }, [cena, datum, skupina]);

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"odpisy projekt"}>
            <h2>Odpisy</h2>
            <h4>Daňové odpisy dlhodobého majetku pre potreby účtovníctva</h4>
            <div className={(skupina == 2 || skupina == 3) ? "odpisyinputy styristlpce" : "odpisyinputy"}>
                <div className={"odpisyinput"}>
                    <p>Mesiac obstarania</p>
                    <input
                        type="month"
                        onChange={(e) => {
                            setDatum(e.target.value)
                        }}/>
                </div>
                <div className={"odpisyinput"}>
                    <p>Vstupná cena</p>
                    <input type="number" placeholder={"Min. 1700€"} onChange={(e) => {
                        setCena(e.target.value)
                    }}/>
                </div>
                <div className={"odpisyinput"}>
                    <p style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        Odpisová skupina
                        <span className={"pomockaskupinybutton"} onClick={() => {
                            setPomockaSkupiny(!pomockaSkupiny);
                            setPomockaKoeficienty(null)
                        }}>?</span>
                    </p>
                    <input type="number" min={0} max={6} placeholder={"0 - 6"} onChange={(e) => {
                        setSkupina(e.target.value)
                    }}/>

                </div>
                {
                    (skupina == 2 || skupina == 3)
                        ? <div className="odpisyinput">
                            <p>Metóda odpisovania</p>
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
                //(datum && cena >= 1700 && skupina >= 0 && skupina <= 6)
                (datum)
                    ? <div className={"odpisyvypocet"}>
                        {/*TODO*/}
                        <table>
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

                            </tbody>
                        </table>
                        <p className={"pomockakoeficientybutton"} onClick={() => {
                            setPomockaKoeficienty(!pomockaKoeficienty);
                            setPomockaSkupiny(null)
                        }}>?</p>
                    </div>
                    : <p>Zadajte potrebné údaje</p>
            }
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
