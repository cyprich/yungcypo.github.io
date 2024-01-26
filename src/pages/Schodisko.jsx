import React, {useEffect, useState} from 'react';
import "../css/styles.css"
import "../css/schodisko.css"
import Latex from "react-latex";

const Schodisko = () => {
    var Latex = require("react-latex");

    const [typSchodiska, setTypSchodiska] = useState(null);
    const [kv, setKv] = useState(0);  // konstrukcna vyska
    const [n, setN] = useState(0);  // pocet stupnov
    const [h, setH] = useState(0);  // vyska stupna
    const [b, setB] = useState(0);  // sirka stupna
    const [alpha, setAlpha] = useState(0);  // sklon ramena
    const [h1, setH1] = useState(0);  // podchodna vyska
    const [h2, setH2] = useState(0);  // priechodna vyska
    const [l, setL] = useState(0); // dlzka ramena

    useEffect(() => {
        if (kv > 680) {
            setN(Math.round(kv / 170))

            if (typSchodiska === 2 && n % 2 !== 0) {
                setN(n - 1)
            }

            setH(Math.round((kv / n) * 1000) / 1000)
            setB(Math.round((630 - 2 * h) / 5) * 5)
            setAlpha(Math.round((Math.atan(h / b) * 180 / Math.PI) * 1000) / 1000);
            setH1(Math.round(1500 + (750 / (Math.cos(alpha * (Math.PI / 180))))));
            setH2(Math.round(750 + 1500 * Math.cos(alpha * (Math.PI / 180))));

            console.log("H1")
            console.log(alpha)
            console.log(alpha * (Math.PI / 180))
            console.log(Math.cos(alpha * (Math.PI / 180)))


            if (typSchodiska === 1) {
                setL((n - 1) * b)
            } else if (typSchodiska === 2) {
                setL((n / 2 - 1) * b)
            }
        }
    }, [typSchodiska, kv, n, h, b, alpha, h1, h2, l]);

    function reset() {
        // TODO
        setTypSchodiska(null);
        setKv(0);
        setN(0);
        setH(0);
        setB(0);
        setAlpha(0);
        setH1(0);
        setH2(0);
        setL(0);
    }

    return (
        <div className={"schodisko projekt"}>
            <div style={{marginBottom: "1em"}}>
                <h2>Schodisko</h2>
                <h4>Návrh a výpočet rozmerov schodiska pre potreby stavebných výkresov</h4>
            </div>
            <div>
                <div>
                    <h3>Typ schodiska</h3>
                    <select
                        name="typSchodiska"
                        id="typSchodiska"
                        onChange={(e) => {
                            setTypSchodiska(Number(e.target.value));
                            // TODO
                        }}
                    >
                        <option value={null}>Vyberte typ schodiska...</option>
                        <optgroup>
                            <option value={1}>Jednoramenné</option>
                            <option value={2}>Dvojramenné</option>
                        </optgroup>
                    </select>
                </div>
                <div>
                    {
                        typSchodiska
                            ? <div className={"schodisko-item"}>
                                <h3 style={{paddingBottom: "0.25em"}}>Konštrukčná výška</h3>
                                <div>
                                    <p>KV = </p>
                                    <input
                                        type="number"
                                        placeholder={"Konštrukčná výška [mm]"}
                                        onChange={(e) => {
                                            setKv(Number(e.target.value))
                                        }}
                                    />
                                </div>
                            </div>
                            : null
                    }
                </div>
                {
                    n >= 3
                        ? <>
                            <div className={"schodisko-item"}>
                                <h3>Počet stupňov</h3>
                                <div>
                                    <p>Vzorec: </p>
                                    <Latex>{`n = $\\frac{KV}{170}$`}</Latex>
                                </div>
                                <div>
                                    <Latex>{`$n = \\frac{` + kv + `}{170}$`}</Latex>
                                </div>
                                <div>
                                    <p className={"zvyraznit"}>Ideálny počet stupňov n = {n}</p>
                                </div>
                            </div>
                            <div className={"schodisko-item"}>
                                <h3>Výška stupňa</h3>
                                <div>
                                    <p>Vzorec: </p>
                                    <Latex>{`$h = \\frac{KV}{n}$`}</Latex>
                                </div>
                                <div>
                                    <p>Dosadenie do vzorca: </p>
                                    <Latex>{`$h = \\frac{` + kv + `}{` + n + `}$`}</Latex>
                                </div>
                                <div>
                                    <p className={"zvyraznit"}>Výška stupňa h = {h} mm</p>
                                </div>
                            </div>
                            <div className={"schodisko-item"}>
                                <h3>Šírka stupňa</h3>
                                <div>
                                    <p>Z pravidla </p>
                                    <Latex>{`$2h + b = 630$`}</Latex>
                                </div>
                                <div>
                                    <p>...vyplýva vzorec: </p>
                                    <Latex>{`$b = 630 - 2 \\times h$`}</Latex>
                                </div>
                                <div>
                                    <p>Dosadenie do vzorca: </p>
                                    <Latex>{`$b = 630 - 2 \\times ` + h + `$`}</Latex>
                                </div>
                                <div>
                                    <p className={"zvyraznit"}>Šírka stupňa b = {b} mm</p>
                                </div>
                            </div>
                            <div>
                                {
                                    // TODO
                                    // Navrh pocet stupnov × vyska × sirka v jednom ramene
                                }
                            </div>
                            <div className={"schodisko-item"}>
                                <h3>Sklon schodiska</h3>
                                <div>
                                    <p>Z pravidla</p>
                                    <Latex>{`$\\tan\\alpha = \\frac{h}{b}$`}</Latex>
                                </div>
                                <div>
                                    <p>...vyplýva vzorec: </p>
                                    <Latex>{`$\\alpha = \\tan^{-1} \\times\\space\\frac{h}{b}$`}</Latex>
                                </div>
                                <div>
                                    <p>Dosadenie do vzorca: </p>
                                    <Latex>{`$\\alpha = \\tan^{-1} \\times\\space\\frac{` + h + `}{` + b + `}$`}</Latex>
                                </div>
                                <div>
                                    <p className={"zvyraznit"}>Sklon schodiska α = {alpha}° ≈ {Math.round(alpha)}°</p>
                                </div>
                            </div>
                            <div className={"schodisko-item"}>
                                <h3>Podchodná výška</h3>
                                <div>
                                    <p>Vzorec: </p>
                                    <Latex>{`$h_1 = 1500 + \\frac{750}{cos\\space\\alpha}$`}</Latex>
                                </div>
                                <div>
                                    <p>Dosadenie do vzorca: </p>
                                    <Latex>{`$h_1 = 1500 + \\frac{750}{cos\\space` + Math.round(alpha) + `\\degree}$`}</Latex>
                                </div>
                                <div>
                                    <p className={"zvyraznit"}>Podchodná výška h<sub>1</sub> = {h1} mm</p>
                                </div>
                                <div>
                                    {
                                        h1 > 2100
                                            ? <div>
                                                <p>{h1} > 2100 <Latex>{`$\\rArr$`}</Latex> <span className={"zvyraznit"}>Návrh vyhovuje</span>
                                                </p>
                                            </div>
                                            : <div>
                                                <p>{h1} <Latex>{`$\\nless$`}</Latex> 2100 <Latex>{`$\\rArr$`}</Latex> <span
                                                    className={"warning"}>Návrh nevyhovuje</span></p>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className={"schodisko-item"}>
                                <h3>Priechodná výška</h3>
                                <div>
                                    <p>Vzorec: </p>
                                    <Latex>{`$h_2 = 750 + 1500 \\times cos\\space\\alpha$`}</Latex>
                                </div>
                                <div>
                                    <p>Dosadenie do vzorca: </p>
                                    <Latex>{`$h_2 = 750 + 1500 \\times cos\\space` + Math.round(alpha) + `\\degree$`}</Latex>
                                </div>
                                <div>
                                    <p className={"zvyraznit"}>Priechodná výška h<sub>2</sub> = {h2} mm</p>
                                </div>
                                <div>
                                    {
                                        h1 > 1900
                                            ? <div>
                                                <p>{h2} > 1900 <Latex>{`$\\rArr$`}</Latex> <span className={"zvyraznit"}>Návrh vyhovuje</span>
                                                </p>
                                            </div>
                                            : <div>
                                                <p>{h2} <Latex>{`$\\nless$`}</Latex> 1900 <Latex>{`$\\rArr$`}</Latex> <span
                                                    className={"warning"}>Návrh nevyhovuje</span></p>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className={"schodisko-item"}>
                                <h3>Dĺžka ramena</h3>
                                <div>
                                    {
                                        typSchodiska === 1
                                            ? <>
                                                <p>Vzorec: </p>
                                                <Latex>{`$$L = (n - 1) \\times b$$`}</Latex>
                                            </>
                                            : null
                                    }
                                    {
                                        typSchodiska === 2
                                            ? <>
                                                <p>Vzorec: </p>
                                                <Latex>{`$$L = (\\frac{n}{2} - 1) \\times b$$`}</Latex>
                                            </>
                                            : null
                                    }
                                </div>
                                <div>
                                    {
                                        typSchodiska === 1
                                            ? <>
                                                <p>Dosadenie do vzorca: </p>
                                                <Latex>{`$$L = (` + n + ` - 1) \\times ` + b + `$$`}</Latex>
                                            </>
                                            : null
                                    }
                                    {
                                        typSchodiska === 2
                                            ? <>
                                                <p>Dosadenie do vzorca: </p>
                                                <Latex>{`$$L = (\\frac{` + n + `}{2} - 1) \\times ` + b + `$$`}</Latex>
                                            </>
                                            : null
                                    }
                                </div>
                                <div>
                                    <p className={"zvyraznit"}>Dĺžka ramena: {l} mm</p>
                                </div>
                            </div>

                        </>
                        : null
                }
                <div>
                    {
                        typSchodiska
                            ? <button onClick={reset}>Reset</button>
                            : null
                    }
                </div>
            </div>
        </div>

    );
};

export default Schodisko;
