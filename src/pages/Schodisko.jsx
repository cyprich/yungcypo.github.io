import React, {useState} from 'react';
import "../css/styles.css"
import "../css/schodisko.css"

const Schodisko = () => {
    const [typSchodiska, setTypSchodiska] = useState(null);
    const [kv, setKv] = useState(null);  // konstrukcna vyska
    const [n, setN] = useState(null);  // pocet stupnov

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
                        setTypSchodiska(e.target.value)
                    }}
                >
                    <option value={2}>Dvojramenné</option>
                    <option value={1}>Jednoramenné</option>
                </select>
            </div>
            <div>
                <h3>Konštrukčná výška</h3>
                <input
                    type="number"
                    placeholder={"Konštrukčná výška [mm]"}
                    onChange={(e) => {
                        setKv(Number(e.target.value))
                        setN(kv / 170)
                        console.log(kv / 170)
                    }}
                />
            </div>
            <div>

            </div>
        </div>
    </div>

    );
};

export default Schodisko;
