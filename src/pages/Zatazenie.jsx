import React, {useEffect, useState} from 'react';
import "../css/styles.css"
import "../css/zatazenie.css"
import Latex from "react-latex";

import zatazenie from "../constants/zatazenie";

const Zatazenie = () => {
    var Latex = require("react-latex");

    const [strecha, setStrecha] = useState(false);
    const [vysledky, setVysledky] = useState([]);

    const hodnotyStrop = ["Škola", "Materská škola", "Administratívna budova", "Knižnica", "Reštaurácia", "Divadelná sála", "Predajňa", "Nemocnica"]
    const hodnotyStrecha = ["I.", "II.", "III.", "IV."]


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
                    <button onClick={() => {
                        setStrecha(!strecha)
                    }}>
                        <img
                            src={
                                strecha
                                    ? require("../images/icons/strecha.png")
                                    : require("../images/icons/strop.png")
                            } alt=""/>
                    </button>
                    <select name="select">
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
                <div className="zatazenieheader">
                    {
                        zatazenie.hodnotyHeader.map((e, key) => {
                            return (
                                <div className="zatazenieheaderhodnota" key={key}>
                                    <div className="nazov">{e.nazov}</div>
                                    <div>
                                        {
                                            e.znacka
                                                ? <div className="znacka"><Latex>{e.znacka}</Latex></div>
                                                : null
                                        }
                                        {
                                            e.jednotka
                                                ? <div className="jednotka"><Latex>{e?.jednotka}</Latex></div>
                                                : null
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="zatazeniebody">

                </div>
                <div className="zatazeniefooter">

                </div>
            </div>
        </div>
    );
};

export default Zatazenie;
