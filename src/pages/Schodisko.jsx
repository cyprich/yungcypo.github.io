import React, {useEffect, useState} from 'react';
import "../css/styles.css"
import "../css/schodisko.css"

const Schodisko = () => {
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

            setH(Math.round((kv/n) * 1000) / 1000)
            setB(Math.round((630 - 2 * h) / 5) * 5)
            setAlpha(Math.round((Math.atan(h/b) * 180/Math.PI) * 1000) / 1000);
            setH1(Math.round(1500 + (750/(Math.cos(alpha * (Math.PI/180))))));
            setH2(Math.round(750 + 1500 * Math.cos(alpha * (Math.PI/180))));

            console.log("H1")
            console.log(alpha)
            console.log(alpha * (Math.PI/180))
            console.log(Math.cos(alpha * (Math.PI/180)))


            if (typSchodiska === 1) {
                setL((n - 1) * b)
            } else if (typSchodiska === 2) {
                setL((n/2 - 1) * b)
            }
        }
    }, [typSchodiska, kv, l]);

    //[typSchodiska, kv, n, h, b, alpha, h1, h2, l]


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
            <div>
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
                            console.log("AHOJ")
                        }}
                    >
                        <option value={null}>Vyberte typ schodiska...</option>
                        <option value={1}>Jednoramenné</option>
                        <option value={2}>Dvojramenné</option>
                    </select>
                </div>
                <div>
                    {
                        typSchodiska
                            ? <>
                                <h3>Konštrukčná výška</h3>
                                <input
                                    type="number"
                                    placeholder={"Konštrukčná výška [mm]"}
                                    onChange={(e) => {
                                        setKv(Number(e.target.value))
                                    }}
                                />
                            </>
                            : null
                    }
                </div>
                {
                    n >= 3
                        ? <>
                            <div>
                                <h3>Počet stupňov</h3>
                                <p>Ideálny počet stupňov: {n}</p>
                            </div>
                            <div>
                                <h3>Výška stupňa</h3>
                                <p>Výška stupňa: {h}mm</p>
                            </div>
                            <div>
                                <h3>Šírka stupňa</h3>
                                <p>Šírka stupňa: {b}mm</p>
                            </div>
                            <div>
                                <h3>Sklon schodiska</h3>
                                <p>Sklon schodiska: {alpha}°</p>
                                <p>Sklon schodiska: {Math.round(alpha)}°</p>
                            </div>
                        <div>
                            <h3>Podchodná výška</h3>
                            <p>Podchodná výška: {h1}mm</p>
                            {
                                h1 > 2100
                                    ? <p className={"underline"}>Vyhovuje</p>
                                    : <p className={"warning"}>Nevyhovuje</p>
                            }
                        </div>
                        <div>
                            <h3>Priechodná výška</h3>
                            <p>Priechodná výška: {h2}mm</p>
                            {
                                h2 > 1900
                                    ? <p className={"underline"}>Vyhovuje</p>
                                    : <p className={"warning"}>Nevyhovuje</p>
                            }
                        </div>
                        <div>
                            <h3>Dĺžka ramena</h3>
                            <p>Dĺžka ramena: {l}mm</p>
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
