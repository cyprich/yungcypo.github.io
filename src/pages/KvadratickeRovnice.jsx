import React, {useEffect, useRef, useState} from 'react';
import Latex from "react-latex";
import "../css/styles.css"
import "../css/kvadratickerovnice.css"

const KvadratickeRovnice = () => {
    var Latex = require("react-latex");

    const [a, setA] = useState(null);
    const [b, setB] = useState(null);
    const [c, setC] = useState(null);
    const [d, setD] = useState(null);
    const [x1, setX1] = useState(null);
    const [x2, setX2] = useState(null);

    useEffect(() => {
        setD(b * b - 4 * a * c)
        if (typeof (d) == "number") {
            if (d > 0) {
                setX1((b * (-1) + Math.sqrt(d)) / (2 * a))
                setX2((b * (-1) - Math.sqrt(d)) / (2 * a))
            } else if (d == 0) {
                setX1((b * (-1) + Math.sqrt(d)) / (2 * a))
            }
        }
    }, [a, b, c, d, x1, x2]);

    // focus next input on enter press
    const aref = useRef(null);
    const bref = useRef(null);
    const cref = useRef(null);

    const handleKeyPress = (event, nextInputRef) => {
        if (event.key === "Enter") {
            event.preventDefault()
            nextInputRef.current.focus()
        }
    }


    /* scroll to top */
    useEffect(() => {
        aref.current.focus()
        window.scrollTo(0, 0)
        document.title = "Cypo | Kvadratické rovnice"
    }, []);

    return (
        <>
            <div className={"kvadratickerovnice projekt"}>
                <h2>Kvadratické rovnice</h2>
                <h4>Výpočet diskriminantu a koreňov kvadratických rovníc</h4>
                <div className={"kvadratickerovnice-item"}>
                    <div>
                        <p>Všeobecný tvar kvadratickej rovnice: </p>
                        <Latex>{`$ax^2 + bx + c = 0$`}</Latex>
                    </div>
                    <div>
                        <p>Vzorec na výpočet kvadratickej rovnice: </p>
                        <Latex>{`$x_{1,2} = \\frac{-b\\pm\\sqrt{D}}{2a}; D = b^2 - 4ac$`}</Latex>
                    </div>
                    <div>
                        <p>Alebo skrátene: </p>
                        <Latex>{`$x_{1,2} = \\frac{-b\\pm\\sqrt{b^2 - 4ac}}{2a}$`}</Latex>
                    </div>
                </div>
                <div className={"kvadratickerovnice-input"}>
                    {
                        (a && b && c)
                            ? null
                            : <h4>Zadajte nasledovné hodnoty: </h4>
                    }
                    <div>
                        <input
                            type="number"
                            placeholder={"a"}
                            onChange={(e) => {
                                setA(e.target.value)
                            }}
                            ref={aref}
                            onKeyDown={(e) => {
                                handleKeyPress(e, bref)
                            }}
                        />
                        <input
                            type="number"
                            placeholder={"b"}
                            onChange={(e) => {
                                setB(e.target.value)
                            }}
                            ref={bref}
                            onKeyDown={(e) => {
                                handleKeyPress(e, cref)
                            }}
                        />
                        <input
                            type="number"
                            placeholder={"c"}
                            onChange={(e) => {
                                setC(e.target.value)
                            }}
                            ref={cref}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    cref.current.blur()
                                }
                            }}
                        />
                    </div>
                </div>
                <div>
                    {
                        (a && b && c && d && d > 0)
                            ? <div className={"kvadratickerovnice-vysledky"}>
                                <div>
                                    <h4>Dosadené hodnoty do vzorca: </h4>
                                    <Latex>{`$x_{1,2} = \\frac{-` + b + `\\space\\pm\\space\\sqrt{` + b + `^2 \\space - \\space 4 \\space\\times\\space` + a + `\\space\\times\\space` + c + `}}{2\\space\\times\\space` + a + `\\space}$`}</Latex>
                                </div>
                                <div>
                                    <h4>D = {d}</h4>
                                </div>
                                <div>
                                    <h4>x<sub>1</sub> = {x1?.toFixed(3)}</h4>
                                </div>
                                <div>
                                    <h4>x<sub>2</sub> = {x2?.toFixed(3)}</h4>
                                </div>
                                <div>
                                    <h4>Korene kvadratickej rovnice: </h4>
                                    <Latex>{`$K = \\{` + x1?.toFixed(3) + `;\\space` + x2?.toFixed(3) + `\\}$`}</Latex>
                                </div>
                            </div>
                            : null
                    }
                    {
                        (a && b && c && d && d == 0)
                            ? <div className={"kvadratickerovnice-vysledky"}>
                                <div>
                                    <h4>Dosadené hodnoty do vzorca: </h4>
                                    <Latex>{`$x = \\frac{-` + b + `\\space\\pm\\space\\sqrt{` + b + `^2 \\space - \\space 4 \\space\\times\\space` + a + `\\space\\times\\space` + c + `}}{2\\space\\times\\space` + a + `\\space}$`}</Latex>
                                </div>
                                <div>
                                    <h4>D = {d}</h4>
                                </div>
                                <div>
                                    <h4>x = {x1?.toFixed(3)}</h4>
                                </div>
                                <div>
                                    <h4>Koreň kvadratickej rovnice: </h4>
                                    <Latex>{`$K = \\{` + x1?.toFixed(3) + `\\}$`}</Latex>
                                </div>
                            </div>
                            : null
                    }
                    {
                        (a && b && c && d && d < 0)
                            ? <h4>Diskriminant D &lt; 0 <Latex>{`$\\rArr$`}</Latex> Daná rovnica nemá riešenie na
                                množine <Latex>{`$\\mathbb{R}$`}</Latex></h4>
                            : null
                    }
                </div>
            {
                a || b || c
                    ? <button id={"resetbutton"} onClick={() => {
                        window.location.reload()
                    }}>Reset</button>
                    : null
            }
            </div>
            {
                /*
                <SpatNa text="matematika" link="/matematika"/>
                */
            }
        </>
    );
};

export default KvadratickeRovnice;
