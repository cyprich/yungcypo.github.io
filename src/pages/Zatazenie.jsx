import React, {useEffect, useState} from 'react';
import Latex from "react-latex";
import "../css/styles.css"
import "../css/zatazenie.css"

import zatazenie from "../constants/zatazenie";

const Zatazenie = () => {
    var Latex = require("react-latex");

    const hodnotyStrop = ["Škola", "Materská škola", "Administratívna budova", "Knižnica", "Reštaurácia", "Divadelná sála", "Predajňa", "Nemocnica"]
    const hodnotyStrecha = ["I.", "II.", "III.", "IV."]

    const [strecha, setStrecha] = useState(false);
    const [vysledky, setVysledky] = useState([]);
    const [selectValue, setSelectValue] = useState(null);

    const [newMaterial, setNewMaterial] = useState(null);
    const [newHrubka, setNewHrubka] = useState(null);
    const [newObjemovaTiaz, setNewObjemovaTiaz] = useState(null);

    const [materialInputHodnota, setMaterialInputHodnota] = useState("");
    const [hrubkaInputHodnota, setHrubkaInputHodnota] = useState("");
    const [objemovaTiazInputHodnota, setObjemovaTiazInputHodnota] = useState("");

    const [gk, setGk] = useState(null);
    const [qk, setQk] = useState(1);
    const [fck, setFck] = useState(null);
    const [gammaf1, setGammaf1] = useState(1.35);
    const [gammaf2, setGammaf2] = useState(1.50);
    const [gd, setGd] = useState(null);
    const [qd, setQd] = useState(null);
    const [fcd, setFcd] = useState(null);

    const pridajRiadok = () => {
        let novyVysledok
        if (newObjemovaTiaz) {
            novyVysledok = {
                material: newMaterial,
                hrubka: newHrubka,
                objemovaTiaz: newObjemovaTiaz,
                zatazovaciaPlocha: 1,
                charakteristickaHodnotaZatazenia: Math.round(newHrubka * newObjemovaTiaz * 1000) / 1000,
                sucinitelZatazenia: "-",
                navrhovaHodnotaZatazenia: "-"
            }
        } else {
            novyVysledok = {
                material: newMaterial,
                hrubka: newHrubka,
                objemovaTiaz: "-",
                zatazovaciaPlocha: 1,
                charakteristickaHodnotaZatazenia: "-",
                sucinitelZatazenia: "-",
                navrhovaHodnotaZatazenia: "-"
            }
        }

        setVysledky([...vysledky, novyVysledok])

        setNewMaterial(null)
        setNewHrubka(null)
        setNewObjemovaTiaz(null)

        setMaterialInputHodnota("")
        setHrubkaInputHodnota("")
        setObjemovaTiazInputHodnota("")
    }

    useEffect(() => {
        // TODO setQk podla selectu - z tabuliek
        if (strecha) {

        } else {

        }
    }, [selectValue]);


    useEffect(() => {
        let novegk = 0
        vysledky.map((e) => {
            if (e.objemovaTiaz != "-") {
                novegk += e.charakteristickaHodnotaZatazenia
            }
        })
        setGk(novegk)
        setFck(gk * qk)
        setGd(gk * gammaf1)
        setQd(qk * gammaf2)
        setFcd(gd + qd)
    }, [vysledky]);


    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"zatazenie projekt"}>
            <div className={"zatazenienadpisy"}>
                <h2>Zaťaženie</h2>
                <h4>Výpočet zaťaženia na {strecha ? "strechu" : "strop"}</h4>
            </div>
            <div className="zatazenieinputy">
                <div>
                    <button title={"Zmeniť strop/strechax"} onClick={() => {
                        setStrecha(!strecha)
                    }}>
                        <img
                            src={
                                strecha
                                    ? require("../images/icons/strecha.png")
                                    : require("../images/icons/strop.png")
                            } alt=""/>
                    </button>
                    <select name="select" onChange={(e) => {
                        setSelectValue(e.target.value)
                    }}>
                        <option value={null}>Vyberte {strecha ? "snehovú oblasť" : "typ prevádzky"}</option>
                        <optgroup>
                            {
                                strecha
                                    ? hodnotyStrecha.map((e, key) => {
                                        return (
                                            <option value={key} key={key}>{e}</option>
                                        )
                                    })
                                    : hodnotyStrop.map((e, key) => {
                                        return (
                                            <option value={key} key={key}>{e}</option>
                                        )
                                    })
                            }
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className="zatazenievysledky">
                <table>
                    <thead>
                    <tr>
                        {zatazenie.hodnotyHeader.map((e, key) => {
                            return (
                                <td colSpan={key >= 4 ? 2 : 1}>
                                    <div className={"nazov"}>{e.nazov}</div>
                                    <div className={"vyrazne"}><Latex>{e?.znacka}</Latex></div>
                                    <div className={"nevyrazne"}><Latex>{e?.jednotka}</Latex></div>
                                </td>
                            )
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {vysledky.map((e, key) => {
                        return (
                            <tr>
                                <td>{e.material}</td>
                                <td>{e.hrubka}</td>
                                <td>{e.objemovaTiaz}</td>
                                <td>{e.zatazovaciaPlocha}</td>
                                <td colSpan={2}>{e.charakteristickaHodnotaZatazenia}</td>
                                <td>{e.sucinitelZatazenia}</td>
                                <td colSpan={3}>{e.navrhovaHodnotaZatazenia}</td>
                            </tr>
                        )
                    })}
                    <tr className={"zatazenienovyriadok"}>
                        <td><input type="text" name={"inputMaterial"} placeholder={"Materiál"}
                                   value={materialInputHodnota} onChange={(e) => {
                            setNewMaterial(e.target.value)
                            setMaterialInputHodnota(e.target.value)
                        }}/></td>
                        <td><input type="number" name={"inputHrubka"} placeholder={"Hrúbka"} value={hrubkaInputHodnota}
                                   onChange={(e) => {
                                       setNewHrubka(Number(e.target.value))
                                       setHrubkaInputHodnota(e.target.value)
                                   }}/></td>
                        <td><input type="number" name={"inputObjemovaTiaz"} placeholder={"Objemová tiaž"}
                                   value={objemovaTiazInputHodnota} onChange={(e) => {
                            setNewObjemovaTiaz(Number(e.target.value))
                            setObjemovaTiazInputHodnota(e.target.value)
                        }}/></td>
                        {
                            newMaterial && newHrubka
                                ? <td style={{
                                    cursor: "pointer",
                                    textAlign: "center"
                                }} colSpan={7} className={"vyrazne"} onClick={() => {
                                    pridajRiadok()
                                }}>Pridať nový riadok</td>
                                : <td style={{
                                    userSelect: "none",
                                    backgroundColor: "transparent",
                                    textAlign: "center"
                                }} colSpan={7} className={"nevyrazne"}>Doplňte údaje vpravo</td>
                        }
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={4}>Stále zaťaženie <span className={"vyrazne"}>g</span></td>
                        <td className={"vyrazne malicke"}>g<sub>k</sub></td>
                        <td>{gk ? gk : null}</td>
                        <td colSpan={2}>{gammaf1}</td>
                        <td className={"vyrazne malicke"}>g<sub>d</sub></td>
                        <td>{gd ? gd : null}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            {
                                strecha
                                    ? "Premenné klimatické zaťaženie snehom "
                                    : "Premenné zaťaženie "
                            }
                            <span className={"vyrazne"}>{strecha ? "S" : "q"}</span>
                        </td>
                        <td>
                            {
                                strecha
                                    ? hodnotyStrecha[selectValue]
                                    : hodnotyStrop[selectValue]
                            }
                        </td>
                        <td className={"vyrazne malicke"}>{strecha ? "S" : "q"}<sub>k</sub></td>
                        <td>{qk ? qk : null}</td>
                        <td colSpan={2}>{gammaf2}</td>
                        <td className={"vyrazne malicke"}>{strecha ? "S" : "q"}<sub>d</sub></td>
                        <td>{qd ? qd : null}</td>
                    </tr>
                    <tr>
                        <td colSpan={4}>Základná kombinácia - celkové zaťaženie</td>
                        <td className={"vyrazne malicke"}>f<sub>ck</sub></td>
                        <td>{fck ? fck : null}</td>
                        <td colSpan={2}>-</td>
                        <td className={"vyrazne malicke"}>f<sub>cd</sub></td>
                        <td style={{
                            color: "var(--color7)",
                            fontSize: "1.25em",
                            textDecoration: "underline"
                        }}>{fcd ? fcd : null}</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Zatazenie;
