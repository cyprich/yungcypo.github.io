import React, {useEffect, useState} from 'react';
import "../css/styles.css"
import "../css/kvadratickerovnice.css"

const KvadratickeRovnice = () => {
    const [a, setA] = useState(null);
    const [b, setB] = useState(null);
    const [c, setC] = useState(null);
    const [d, setD] = useState(null);
    const [x1, setX1] = useState(null);
    const [x2, setX2] = useState(null);

    const vypocet = () => {
        /*
        if (typeof(a) != null && typeof(b) != null && typeof(c) != null) {
            setD(b*b - 4*a*c)
        }
        */
    }

    return (
        {/*
        <div className={"kvadratickerovnice projekt"}>
            <div>
                <h2>Kvadratické rovnice</h2>
                <h4>Výpočet koreňov kvadratickej rovnice</h4>
            </div>
            <div>
                <input
                    type="number"
                    placeholder={"A"}
                    onChange={(e) => {
                        setA(Number(e.target.value));
                        vypocet()
                    }}/>
                <input
                    type="number"
                    placeholder={"B"}
                    onChange={(e) => {
                        setB(Number(e.target.value));
                        vypocet();
                    }}/>
                <input
                    type="number"
                    placeholder={"C"}
                    onChange={(e) => {
                        setC(Number(e.target.value));
                        vypocet()
                    }}/>
            </div>
            <div>
                {

                }

                <p>
                    {d ? <>
                        D : {d}
                    </> : null}
                </p>
            </div>
        </div>
        */}
    );
};

export default KvadratickeRovnice;
