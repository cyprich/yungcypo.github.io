import React from 'react';
import "../css/styles.css"
import "../css/nalepkynafilament.css"
import filamenty from "../constants/filamenty";

const NalepkyNaFilament = () => {
    return (
        <div className={"nalepkynafilament projekt"}>
            <h2 className={"noprint"}>Nálepky na filament</h2>
            <h4 className={"noprint"}>Vytvorenie štítkov na filamenty</h4>
            <div className={"nalepkynafilamentcontent"}>
                {filamenty.map((f, key) => {
                    return (
                        <div className={"filament"} key={key}>
                            <div className="filamentnadpisy">
                                <div className={"filamentfarba"} style={{
                                    background: f.farba.code,
                                    border: ("0.5cm " + f.farba.code + " solid")
                                }}/>
                                <p className={"filamentnadpis"}>{f.vyrobca + " " + f.material}</p>
                            </div>
                            <div className={"filamentinfo"}>
                                <div className={"filamenthmotnostacena"}>
                                    <p>{(f.hmotnost.povodna / 1000)} kg ({f.hmotnost.spool}g spool)</p>
                                    <p>{f.cena.toFixed(2)} €</p>
                                </div>
                                <div className={"filamentteplota"}>
                                    <p>Teplota: {f.teplota.print.min} - {f.teplota.print.max}°C</p>
                                    <p>Bed: {f.teplota.bed.min} - {f.teplota.bed.max}°C</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button onClick={window.print} className={"noprint"}>Tlačiť</button>
        </div>
    )
};

export default NalepkyNaFilament;
