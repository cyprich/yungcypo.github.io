import React, {useEffect, useRef, useState} from 'react';
import Latex from "react-latex";
import "../css/styles.css"
import "../css/zatazenie.css"

import zatazenie from "../constants/zatazenie";
import SpatNa from "../components/SpatNa";

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
    const [qk, setQk] = useState(null);
    const [fck, setFck] = useState(null);
    const [gammaf1, setGammaf1] = useState(1.35);
    const [gammaf2, setGammaf2] = useState(1.50);
    const [gd, setGd] = useState(null);
    const [qd, setQd] = useState(null);
    const [fcd, setFcd] = useState(null);

    const [sk, setSk] = useState(null);
    const [mii, setMii] = useState(0.8);
    const [ce, setCe] = useState(1);
    const [ct, setCt] = useState(1);
    const [so, setSo] = useState(null);

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

    // vsetky vypocty
    useEffect(() => {
        let novegk = 0
        vysledky.map((e) => {
            if (e.objemovaTiaz != "-") {
                novegk += e.charakteristickaHodnotaZatazenia
            }
        })
        setGk(Math.round((novegk) * 1000) / 1000)

        if (strecha) {
            switch (Number(selectValue)) {
                case 0:
                    setSo(0.75)
                    break
                case 1:
                    setSo(1.05)
                    break
                case 2:
                    setSo(1.5)
                    break
                case 3:
                    setSo(2.25)
                    break
            }
        } else if (!strecha && selectValue != null) {
            switch (Number(selectValue)) {
                case 0:
                case 1:
                case 2:
                case 4:
                case 6:
                case 7:
                    setQk(3)
                    break
                case 3:
                    // kniznica
                    setQk(7.5)
                    break
                case 5:
                    // divadelna sala
                    setQk(4)
                    break

            }
        }
        setSk(Math.round((mii * ce * ct * so) * 100) / 100)

        if (strecha) {
            if (sk && gk) {
                setFck(Math.round((sk * gk) * 1000) / 1000)
            }
            if (sk && gammaf2) {
                setQd(Math.round((sk * gammaf2) * 1000) / 1000)
            }
        } else {
            if (gk && qk) {
                setFck(Math.round((gk * qk) * 1000) / 1000)
            }
            if (qk && gammaf2) {
                setQd(Math.round((qk * gammaf2) * 1000) / 1000)
            }
        }

        if (gk && gammaf1) {
            setGd(Math.round((gk * gammaf1) * 1000) / 1000)
        }
        if (gd && gd) {
            setFcd(Math.round((gd + qd) * 1000) / 1000)
        }
    }, [vysledky, selectValue, gk, so, qk, sk, fck, gd, qd, fcd]);

    // focus input
    const materialref = useRef(null);
    const hrubkaref = useRef(null);
    const objemovatiazref = useRef(null);
    const pridajref = useRef(null);
    useEffect(() => {
        if (materialref.current) {
            materialref.current.focus()
        }
    }, [selectValue]);
    const handleKeyPress = (event, nextInputRef) => {
        if (event.key === "Enter" && nextInputRef.current && !event.shiftKey) {
            event.preventDefault()

            // pri poslednom inpute nech sa klikne tlacitko a da naspak na material
            if (nextInputRef == materialref && newMaterial && newHrubka && pridajref.current) {
                pridajref.current.click()
            }
            nextInputRef.current.focus()
        }
    }

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className={"zatazenie projekt"}>
                <div className={"zatazenienadpisy"}>
                    <h2>Zaťaženie</h2>
                    <h4>Výpočet zaťaženia na {strecha ? "plochú strechu" : "strop"}</h4>
                </div>
                <div className="zatazenieinputy">
                    <div>
                        <button title={"Zmeniť strop / strecha"} onClick={() => {
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
                                    <td colSpan={key >= 4 ? 2 : 1} key={key}>
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
                                <tr key={key}>
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
                            <td><input
                                type="text"
                                name={"inputMaterial"}
                                placeholder={"Materiál"}
                                value={materialInputHodnota}
                                onChange={(e) => {
                                    setNewMaterial(e.target.value)
                                    setMaterialInputHodnota(e.target.value)
                                }}
                                ref={materialref}
                                onKeyDown={(e) => {
                                    handleKeyPress(e, hrubkaref)
                                }}
                            /></td>
                            <td><input
                                type="number"
                                name={"inputHrubka"}
                                placeholder={"Hrúbka"}
                                value={hrubkaInputHodnota}
                                onChange={(e) => {
                                    setNewHrubka(Number(e.target.value))
                                    setHrubkaInputHodnota(e.target.value)
                                }}
                                ref={hrubkaref}
                                onKeyDown={(e) => {
                                    handleKeyPress(e, objemovatiazref)
                                }}
                            /></td>
                            <td><input
                                type="number"
                                name={"inputObjemovaTiaz"}
                                placeholder={"Objemová tiaž"}
                                value={objemovaTiazInputHodnota}
                                onChange={(e) => {
                                    setNewObjemovaTiaz(Number(e.target.value))
                                    setObjemovaTiazInputHodnota(e.target.value)
                                }}
                                ref={objemovatiazref}
                                onKeyDown={(e) => {
                                    handleKeyPress(e, materialref)
                                }}
                            /></td>
                            {
                                newMaterial && newHrubka
                                    ? <td
                                        style={{
                                            cursor: "pointer",
                                            textAlign: "center"
                                        }}
                                        colSpan={7}
                                        className={"vyrazne"}
                                        onClick={() => {
                                            pridajRiadok()
                                        }}
                                        ref={pridajref}
                                    >Pridať nový riadok</td>
                                    : <td
                                        style={{
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
                            {
                                strecha
                                    ? <td>{sk ? sk : null}</td>
                                    : <td>{qk ? qk : null}</td>
                            }
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
                    {
                        (strecha && sk)
                            ? <div className="afterfooter">
                                <div><Latex>{`$S_K = \\mu_i \\times c_e \\times c_t \\times S_O $`}</Latex></div>
                                <div>
                                    <Latex>{`$S_K = ` + mii + ` \\times ` + ce + ` \\times ` + ct + ` \\times ` + so + `$`}</Latex>
                                </div>
                                <div><Latex>{`$S_K = ` + sk + ` $`}</Latex></div>
                            </div>
                            : null
                    }
                </div>
                {
                    selectValue || materialInputHodnota != "" || hrubkaInputHodnota != "" || objemovaTiazInputHodnota != "" || vysledky.length != 0
                        ? <button onClick={() => {window.location.reload()}}>Reset</button>
                        : null
                }
            </div>
            <SpatNa text={"Staviteľstvo"} link={"/stavitelstvo"}/>
        </>
    );
};

export default Zatazenie;
