import React, {useEffect, useState} from 'react';
import "../css/styles.css"
import "../css/zatazenie.css"

const Zatazenie = () => {
    const [strecha, setStrecha] = useState(false);

    const hodnotyStrop = ["Škola, Materská škola, Administratívna budova, Knižnica, Reštaurácia, Divadelná sála, Predajňa, Nemocnica".split(", ")]
    const hodnotyStrecha = ["I., II., III., IV.".split(", ")]

    console.log(hodnotyStrop)
    console.log(hodnotyStrecha)

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
                    {
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default Zatazenie;
