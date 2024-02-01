import React, {useEffect, useState} from 'react';
import Latex from "react-latex";
import "../css/styles.css"
import "../css/vystuz.css"

import vystuz from "../constants/vystuz";

const Vystuz = () => {
    var Latex = require("react-latex");

    const [dlzkaDosky, setDlzkaDosky] = useState(null);
    const [hrubkaDosky, setHrubkaDosky] = useState(null);
    const [moment, setMoment] = useState(null);
    const [beton, setBeton] = useState(null);
    const [nosnaOcel, setNosnaOcel] = useState(null);
    const [rozdelovaciaOcel, setRozdelovaciaOcel] = useState(null);

    useEffect(() => {
        console.log("\n")
        console.log(beton)
        console.log(nosnaOcel)
        console.log(rozdelovaciaOcel)
    }, [beton, nosnaOcel, rozdelovaciaOcel]);

    console.log()

    /* scroll to top */
    useEffect(() => {
        //TODO enable back scroll to top
        //window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"projekt vystuz"}>
            <h2>Výstuž</h2>
            <h4>Návrh výstuže jednoduchej dosky</h4>
            <div className="vystuzinputy">
                <div>
                    <input type="number" placeholder={"Dĺžka dosky [m]"} onChange={(e) => {
                        setDlzkaDosky(e.target.value)
                    }}/>
                    <input type="number" placeholder={"Hrúbka dosky [m]"} onChange={(e) => {
                        setHrubkaDosky(e.target.value)
                    }}/>
                    <input type="number" placeholder={"Moment pôsobiaci na dosku [KNm]"} onChange={(e) => {
                        setMoment(e.target.value)
                    }}/>
                </div>
                <div>
                    <select name="beton" onChange={(e) => {
                        setBeton(e.target.value)
                    }}>
                        <option value={null}>Vyber betón</option>
                        <optgroup>
                            {
                                vystuz.betony.map((e, key) => {
                                    return (
                                        <option value={key} key={key}>{e}</option>
                                    )
                                })
                            }
                        </optgroup>
                    </select>
                    <select name="nosnaocel" onChange={(e) => {
                        setNosnaOcel(e.target.value)
                    }}>>
                        <option value={null}>Vyber nosnú oceľ</option>
                        <optgroup>
                            {
                                vystuz.ocele.map((e, key) => {
                                    return (
                                        <option value={key} key={key}>{e}</option>
                                    )
                                })
                            }
                        </optgroup>
                    </select>
                    <select name="rozdelovaciaocel" onChange={(e) => {
                        setRozdelovaciaOcel(e.target.value)
                    }}>>
                        <option value={null}>Vyber rozdeľovaciu oceľ</option>
                        <optgroup>
                            {
                                vystuz.ocele.map((e, key) => {
                                    return (
                                        <option value={key} key={key}>{e}</option>
                                    )
                                })
                            }
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className="vystuzvysledky">
                <section>
                    <h3>1. Návrhové pevnosti betónu a ocele</h3>
                    <div>
                        <p>{vystuz.betony[beton]}<Latex>{`$\\space\\Rarr\\space$`}</Latex>{}</p>
                        <p><Latex>{`$f_{ck} =  \\text{MPa}$`}</Latex></p>
                        <p><Latex>{`$f_{cd} = \\frac{f_{ck}}{\\gamma_c}$`}</Latex></p>
                        <p><Latex>{`$f_{cd} = \\frac{f_{ck}}{\\gamma_c}$`}</Latex></p>
                        <p><Latex>{`$f_{cd} = $`}</Latex></p>
                    </div>
                    <div>
                        <p>{vystuz.ocele[nosnaOcel]}<Latex>{`$\\space\\Rarr\\space$`}</Latex>{}</p>
                        <p><Latex>{`$f_{yk} =  \\text{MPa}$`}</Latex></p>
                        <p><Latex>{`$f_{yd} = \\frac{f_{yk}}{\\gamma_s}$`}</Latex></p>
                        <p><Latex>{`$f_{yd} = \\frac{f_{yk}}{\\gamma_s}$`}</Latex></p>
                        <p><Latex>{`$f_{yd} = $`}</Latex></p>
                    </div>
                </section>
                <section>
                    <h3>2. Krytie výstuže</h3>
                    <div>
                        <p><Latex>{`$c = c_{min} + \\Delta h$`}</Latex></p>
                        <p><Latex>{`$c = c_{min} + \\Delta h$`}</Latex></p>
                        <p><Latex>{`$c =  mm =  m$`}</Latex></p>
                    </div>
                </section>
                <section>
                    <h3>3. Účinná výška prierezu</h3>
                    <div>
                        <p><Latex>{`$d = h - c - \\frac{\\phi}{2}$`}</Latex></p>
                        <p><Latex>{`$d = h - c - \\frac{\\phi}{2}$`}</Latex></p>
                        <p><Latex>{`$d =  m$`}</Latex></p>
                    </div>
                </section>
                <section>
                    <h3>4. Plocha výstuže</h3>
                    <div>
                        <p style={{fontSize: "1.375em"}}><Latex>{`$
                            As = b \\space\\times\\space d \\space\\times\\space \\frac{\\alpha \\space\\times\\space f_{cd}}{f_{yd}}\\space\\times\\space
                            \\bigg(
                            1 - \\sqrt{\\frac{1}{1} - \\frac{2 \\space\\times\\space M_{sd}}{b \\space\\times\\space d^2 \\space\\times\\space \\alpha \\space\\times\\space f_{cd}}}
                            \\bigg)
                        $`}</Latex></p>
                        <p style={{fontSize: "1.375em"}}><Latex>{`$
                            As = b \\space\\times\\space d \\space\\times\\space \\frac{\\alpha \\space\\times\\space f_{cd}}{f_{yd}}\\space\\times\\space
                            \\bigg(
                            1 - \\sqrt{\\frac{1}{1} - \\frac{2 \\space\\times\\space M_{sd}}{b \\space\\times\\space d^2 \\space\\times\\space \\alpha \\space\\times\\space f_{cd}}}
                            \\bigg)
                        $`}</Latex></p>
                        <p style={{fontSize: "1.375em"}}><Latex>{`$As =  m^2$`}</Latex></p>
                    </div>
                    <div>
                        <p>Volím <Latex>{`$6 \\phi v10/m' \\Rarr A_s = $`}</Latex></p>
                    </div>
                </section>
                <section>
                    <h3>5. Posúdenie</h3>
                    <div>
                        <h4>Kontrola stupňa vystuženia</h4>
                        <div>
                            <p><Latex>{`$A_{s_{min}} \\le A_s \\le A_{s_{max}}$`}</Latex></p>
                            <div></div>
                            <p>
                                <Latex>{`$A_{s_{min}} = 0.0015 \\times b \\times d \\space\\space \\small{(ak\\space f_{yk} > 400\\text{MPa})}$`}</Latex>
                            </p>
                            <p><Latex>{`$A_{s_{min}} = 0.0015 \\times b \\times d$`}</Latex></p>
                            <p><Latex>{`$A_{s_{min}} =  m^2$`}</Latex></p>
                            <div></div>
                            <p><Latex>{`$A_{s_{max}} = 0.04 \\times b \\times h $`}</Latex></p>
                            <p><Latex>{`$A_{s_{max}} = 0.04 \\times b \\times h $`}</Latex></p>
                            <p><Latex>{`$A_{s_{max}} =  m^2$`}</Latex></p>
                            <div></div>
                            <p><Latex>{`$A_{s_{min}} \\le A_s \\le A_{s_{max}}$`}</Latex></p>
                            <p><Latex>{`$ \\le  \\le [m^2]$`}</Latex></p>
                        </div>
                    </div>
                    <div>
                        <h4>Poloha neutrálnej osi</h4>
                        <div>
                            <p>
                                <Latex>{`$x = 1.25 \\space\\times\\space \\frac{A_s \\space\\times\\space f_{yd}}{b \\space\\times\\space \\alpha \\space\\times\\space f_{cd}}$`}</Latex>
                            </p>
                            <p>
                                <Latex>{`$x = 1.25 \\space\\times\\space \\frac{A_s \\space\\times\\space f_{yd}}{b \\space\\times\\space \\alpha \\space\\times\\space f_{cd}}$`}</Latex>
                            </p>
                            <p><Latex>{`$x = $`}</Latex></p>
                        </div>
                    </div>
                    <div>
                        <h4>Kontrola napätia v oceli</h4>
                        <div>
                            <p>
                                <Latex>{`$\\xi = \\frac{x}{d} \\Leftrightarrow 1.25 \\times \\big( \\frac{A_s}{b\\times d} \\big) \\times \\big( \\frac{f_{yd}}{\\alpha \\times f_{cd}} \\big) \\le \\xi_{max} $`}</Latex>
                            </p>
                            <p>
                                <Latex>{`$\\xi = \\frac{x}{d} \\Leftrightarrow 1.25 \\times \\big( \\frac{A_s}{b\\times d} \\big) \\times \\big( \\frac{f_{yd}}{\\alpha \\times f_{cd}} \\big) \\le \\xi_{max} $`}</Latex>
                            </p>
                            <p>
                                <Latex>{`$\\xi = \\frac{x}{d} \\Leftrightarrow 1.25 \\times \\big( \\frac{A_s}{b\\times d} \\big) \\times \\big( \\frac{f_{yd}}{\\alpha \\times f_{cd}} \\big) \\le \\xi_{max} $`}</Latex>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4>Moment únostnosti</h4>
                        <div>
                            <p><Latex>{`$z = d - 0.4x$`}</Latex></p>
                            <p><Latex>{`$z = d - 0.4x$`}</Latex></p>
                            <p><Latex>{`$z = $`}</Latex></p>
                            <div></div>
                            <p><Latex>{`$M_{RD} = A_s \\times f_{yd} \\times z$`}</Latex></p>
                            <p><Latex>{`$M_{RD} = A_s \\times f_{yd} \\times z$`}</Latex></p>
                            <p><Latex>{`$M_{RD} =  \\text{MNm}$`}</Latex></p>
                        </div>
                        <div>
                            <p><Latex>{`$M_{RD} \\ge M_{Sd}$`}</Latex></p>
                            <p><Latex>{`$M_{RD} \\ge M_{Sd}$`}</Latex></p>
                            <p>Návrh {} <span style={{color: "var(--color7)"}}>Vyhovuje!</span></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Vystuz;
