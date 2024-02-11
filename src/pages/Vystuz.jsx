import React, {useEffect, useRef, useState} from 'react';
import Latex from "react-latex";
import "../css/styles.css"
import "../css/vystuz.css"

import vystuz from "../constants/vystuz";
import SpatNa from "../components/SpatNa";

const Vystuz = () => {
    let Latex = require("react-latex");
    const vysledkyref = useRef(null);

    const [dlzkaDosky, setDlzkaDosky] = useState(null);
    const [hrubkaDosky, setHrubkaDosky] = useState(null);
    const [moment, setMoment] = useState(null);
    const [beton, setBeton] = useState(null);
    const [nosnaOcel, setNosnaOcel] = useState(null);
    const [rozdelovaciaOcel, setRozdelovaciaOcel] = useState(null);


    const [b, setB] = useState(1);
    const [alpha, setAlpha] = useState(1);

    const [fck, setFck] = useState(null);
    const [fcd, setFcd] = useState(null);
    const [gammac, setGammac] = useState(1.5);
    const [fyk, setFyk] = useState(null);
    const [fyd, setFyd] = useState(null);
    const [gammas, setGammas] = useState(1.15);
    const [cmin, setCmin] = useState(15);
    const [deltah, setDeltah] = useState(5);
    const [c, setC] = useState((cmin + deltah) / 1000);
    const [d, setD] = useState(null);
    const [as, setAs] = useState(null);
    const [asVypocet, setAsVypocet] = useState(null);
    const [asmin, setAsmin] = useState(null);
    const [asmax, setAsmax] = useState(null);
    const [x, setX] = useState(null);
    const [ksi, setKsi] = useState(null);
    const [ksimax, setKsimax] = useState(null);
    const [z, setZ] = useState(null);
    const [mrd, setMrd] = useState(null);
    const [msd, setMsd] = useState(null);

    const [priemerVystuze, setPriemerVystuze] = useState(0.008);
    const [pocetVystuzi, setPocetVystuzi] = useState(null);
    const [zobrazitTabulecku, setZobrazitTabulecku] = useState(false);
    const [zobrazitVysledok, setZobrazitVysledok] = useState(false);

    useEffect(() => {
        setFck(vystuz.fck[beton])
        setFcd(fck / gammac)
        setFyk(vystuz.fyk[nosnaOcel])
        setFyd(fyk / gammas)

        setD(hrubkaDosky - c - priemerVystuze / 2)

        setMsd(moment / 1000)

        setAsVypocet(b * d * ((alpha * fcd) / fyd) * (1 - Math.sqrt((1) - ((2 * msd) / (b * (d * d) * alpha * fcd)))))

        if (fyk > 400) {
            setAsmin(0.0015 * b * d)
        } else {
            setAsmin(0.6 * b * (d / fyk))
        }
        setAsmax(0.04 * b * hrubkaDosky)

        setX(1.25 * ((as * fyd) / (b * alpha * fcd)))

        setKsi(x / d)

        if (beton <= 5) {
            setKsimax(0.45)
        } else {
            setKsimax(0.35)
        }

        setZ(d - 0.4 * x)
        setMrd(as * fyd * z)

        if (
            dlzkaDosky != null && hrubkaDosky != null && moment != null &&
            beton != null && nosnaOcel != null && rozdelovaciaOcel != null) {
            setZobrazitTabulecku(true)
        } else {
            setZobrazitTabulecku(false)
        }

    }, [
        dlzkaDosky, hrubkaDosky, moment, beton, nosnaOcel, rozdelovaciaOcel,
        fck, fcd, fyk, fyd, d, msd, asVypocet, as, asmin, asmax, x, ksi, ksimax, z, mrd
    ]);

    // input focus
    const dlzkadoskyref = useRef(null);
    const hrubkadoskyref = useRef(null);
    const momentref = useRef(null);
    const handleKeyPress = (event, nextInputRef) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()
            nextInputRef.current.focus()
        }
    }

    // scroll to vysledky when tabulecka is clicked
    useEffect(() => {
        scrollToVysledky()
    }, [zobrazitVysledok]);

    const scrollToVysledky = () => {
        vysledkyref?.current?.scrollIntoView({behavior: 'smooth'})
    }

    /* scroll to top */
    useEffect(() => {
        if (dlzkadoskyref.current) {
            dlzkadoskyref.current.focus()
        }
        window.scrollTo(0, 0)
        document.title = "Cypo | Výstuž"
    }, []);

    return (
        <>
            <div className={"projekt vystuz"}>
                <div className="vystuznadpisy">
                    <h2>Výstuž</h2>
                    <h4>Návrh výstuže jednoduchej dosky</h4>
                </div>
                <div className="vystuzinputy">
                    <div>
                        <input
                            type="number"
                            placeholder={"Dĺžka dosky [m]"}
                            onChange={(e) => {
                                setDlzkaDosky(Number(e.target.value))
                            }}
                            ref={dlzkadoskyref}
                            onKeyDown={(e) => {
                                handleKeyPress(e, hrubkadoskyref)
                            }}
                        />
                        <input
                            type="number"
                            placeholder={"Hrúbka dosky [m]"}
                            onChange={(e) => {
                                setHrubkaDosky(Number(e.target.value))
                            }}
                            ref={hrubkadoskyref}
                            onKeyDown={(e) => {
                                handleKeyPress(e, momentref)
                            }}
                        />
                        <input
                            type="number"
                            placeholder={"Moment pôsobiaci na dosku [KNm]"}
                            onChange={(e) => {
                                setMoment(Number(e.target.value))
                            }}
                            ref={momentref}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    momentref.current.blur()
                                }
                            }}
                        />
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
                {
                    zobrazitTabulecku
                        ? <>
                            {
                                zobrazitVysledok
                                    ? null
                                    : <p style={{paddingBottom: "0.5em"}}>
                                        Vyber plochu výstuže na základe požadovaného priemeru výstuže a počtu prútov
                                    </p>
                            }
                            <table className={"vystuztabulecka"}>
                                <thead>
                                <tr>
                                    <td rowSpan={2}>Priemer výstuže <span className={"nevyrazne"}>[mm]</span></td>
                                    <td colSpan={5}>Počet prútov vo výstuži</td>
                                </tr>
                                <tr>
                                    {
                                        vystuz.pocetprutovvystuze.map((e, key) => {
                                            return (
                                                <td key={key}>{e}</td>
                                            )
                                        })
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    vystuz.plochyvystuze.map((x, keyx) => {
                                        return (
                                            <tr key={keyx}>
                                                {x.map((y, keyy) => {
                                                    if (keyy == 0) {
                                                        return (
                                                            <td key={keyy}>{y}</td>
                                                        )
                                                    } else {
                                                        if (asVypocet <= y) {
                                                            return (
                                                                <td
                                                                    className={"selectable"}
                                                                    key={keyy}
                                                                    onClick={() => {
                                                                        setAs(vystuz.plochyvystuze[keyx][keyy])
                                                                        setPocetVystuzi(vystuz.pocetprutovvystuze[keyx])
                                                                        setPriemerVystuze(vystuz.priemervystuze[keyy] / 1000)
                                                                        setZobrazitVysledok(true)
                                                                        scrollToVysledky()
                                                                    }}
                                                                >
                                                                    {y}
                                                                </td>
                                                            )
                                                        } else {
                                                            return (
                                                                <td className={"nevyrazne"} key={keyy}>{y}</td>
                                                            )
                                                        }
                                                    }
                                                })}
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </>
                        : null
                }
                {
                    zobrazitVysledok
                        ? <div className="vystuzvysledky" ref={vysledkyref}>
                            <section>
                                <h3>1. Návrhové pevnosti betónu a ocele</h3>
                                <div>
                                    <p>{vystuz.betony[beton]}<Latex>{`$\\space\\Rarr\\space f_{ck} = ` + fck + `\\text{MPa}$`}</Latex>{}
                                    </p>
                                    <p><Latex>{`$f_{cd} = \\frac{f_{ck}}{\\gamma_c}$`}</Latex></p>
                                    <p><Latex>{`$f_{cd} = \\frac{` + fck + `}{` + gammac + `}$`}</Latex></p>
                                    <p><Latex>{`$f_{cd} = ` + fcd.toFixed(3) + `\\text{MPa}$`}</Latex></p>
                                </div>
                                <div>
                                    <p>{vystuz.ocele[nosnaOcel]}<Latex>{`$\\space\\Rarr\\space f_{yk} = ` + fyk + `\\text{MPa}$`}</Latex>{}
                                    </p>
                                    <p><Latex>{`$f_{yd} = \\frac{f_{yk}}{\\gamma_s}$`}</Latex></p>
                                    <p><Latex>{`$f_{yd} = \\frac{` + fyk + `}{` + gammas + `}$`}</Latex></p>
                                    <p><Latex>{`$f_{yd} = ` + fyd.toFixed(3) + `$`}</Latex></p>
                                </div>
                            </section>
                            <section>
                                <h3>2. Krytie výstuže</h3>
                                <div>
                                    <p><Latex>{`$c = c_{min} + \\Delta h$`}</Latex></p>
                                    <p><Latex>{`$c = ` + cmin + ` + ` + deltah + `$`}</Latex></p>
                                    <p><Latex>{`$c = ` + c * 1000 + `mm = ` + c + ` m$`}</Latex></p>
                                </div>
                            </section>
                            <section>
                                <h3>3. Účinná výška prierezu</h3>
                                <div>
                                    <p><Latex>{`$d = h - c - \\frac{\\phi}{2}$`}</Latex></p>
                                    <p>
                                        <Latex>{`$d = ` + hrubkaDosky + ` - ` + c + ` - \\frac{` + priemerVystuze + `}{2}$`}</Latex>
                                    </p>
                                    <p><Latex>{`$d = ` + d.toFixed(3) + ` m$`}</Latex></p>
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
                            As = ` + b + ` \\space\\times\\space ` + d.toFixed(3) + ` \\space\\times\\space \\frac{` + alpha + ` \\space\\times\\space ` + fcd.toFixed(3) + `}{` + fyd.toFixed(3) + `}\\space\\times\\space
                            \\bigg(
                            1 - \\sqrt{\\frac{1}{1} - \\frac{2 \\space\\times\\space ` + msd + `}{` + b + ` \\space\\times\\space ` + d.toFixed(3) + `^2 \\space\\times\\space ` + alpha + ` \\space\\times\\space ` + fcd.toFixed(3) + `}}
                            \\bigg)
                        $`}</Latex></p>
                                    <p style={{fontSize: "1.375em"}}>
                                        <Latex>{`$As =  ` + asVypocet.toFixed(6) + `m^2$`}</Latex></p>
                                </div>
                                <div>
                                    <p>Volím <Latex>{`$` + priemerVystuze * 1000 + ` \\phi v` + pocetVystuzi + `/m' \\Rarr A_s = ` + as + ` $`}</Latex>
                                    </p>
                                </div>
                            </section>
                            <section>
                                <h3>5. Posúdenie</h3>
                                <div>
                                    <h4>Kontrola stupňa vystuženia</h4>
                                    <div>
                                        <p><Latex>{`$A_{s_{min}} \\le A_s \\le A_{s_{max}}$`}</Latex></p>
                                        <div></div>
                                        {
                                            fyk > 400
                                                ? <>
                                                    <p>
                                                        <Latex>{`$A_{s_{min}} = 0.0015 \\times b \\times d \\space\\space \\small{(ak\\space f_{yk} > 400\\text{MPa})}$`}</Latex>
                                                    </p>
                                                    <p>
                                                        <Latex>{`$A_{s_{min}} = 0.0015 \\times ` + b + ` \\times ` + d.toFixed(3) + `$`}</Latex>
                                                    </p>
                                                    <p><Latex>{`$A_{s_{min}} = ` + asmin.toFixed(3) + ` m^2$`}</Latex></p>
                                                </>
                                                : <>
                                                    <p>
                                                        <Latex>{`$A_{s_{min}} = 0.6 \\times b \\times \\frac{d}{f_{yk}} \\space \\small{(ak\\space f_{yk} \\ge 400\\text{MPa})}$`}</Latex>
                                                    </p>
                                                    <p>
                                                        <Latex>{`$A_{s_{min}} = 0.6 \\times ` + b + ` \\times \\frac{` + d.toFixed(3) + `}{` + fyk + `}$`}</Latex>
                                                    </p>
                                                    <p><Latex>{`$A_{s_{min}} = ` + asmin.toFixed(3) + ` m^2$`}</Latex></p>
                                                </>
                                        }

                                        <div></div>
                                        <p><Latex>{`$A_{s_{max}} = 0.04 \\times b \\times h $`}</Latex></p>
                                        <p>
                                            <Latex>{`$A_{s_{max}} = 0.04 \\times ` + b + ` \\times ` + hrubkaDosky + ` $`}</Latex>
                                        </p>
                                        <p><Latex>{`$A_{s_{max}} = ` + asmax.toFixed(3) + ` m^2$`}</Latex></p>
                                        <div></div>
                                        <p><Latex>{`$A_{s_{min}} \\le A_s \\le A_{s_{max}}$`}</Latex></p>
                                        <p>
                                            <Latex>{`$ ` + asmin.toFixed(3) + ` \\le ` + as + ` \\le ` + asmax.toFixed(3) + `\\space\\small{[m^2]}$`}</Latex>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h4>Poloha neutrálnej osi</h4>
                                    <div>
                                        <p>
                                            <Latex>{`$x = 1.25 \\space\\times\\space \\frac{A_s \\space\\times\\space f_{yd}}{b \\space\\times\\space \\alpha \\space\\times\\space f_{cd}}$`}</Latex>
                                        </p>
                                        <p>
                                            <Latex>{`$x = 1.25 \\space\\times\\space \\frac{` + as + ` \\space\\times\\space ` + fyd.toFixed(3) + `}{` + b + ` \\space\\times\\space ` + alpha + ` \\space\\times\\space ` + fcd.toFixed(3) + `}$`}</Latex>
                                        </p>
                                        <p><Latex>{`$x = ` + x.toFixed(6) + ` $`}</Latex></p>
                                    </div>
                                </div>
                                <div>
                                    <h4>Kontrola napätia v oceli</h4>
                                    <div>
                                        <p>
                                            <Latex>{`$\\xi = \\frac{x}{d} = 1.25 \\times \\big( \\frac{A_s}{b\\times d} \\big) \\times \\big( \\frac{f_{yd}}{\\alpha \\times f_{cd}} \\big) \\le \\xi_{max} $`}</Latex>
                                        </p>
                                        <p>
                                            <Latex>{`$\\xi = \\frac{` + x.toFixed(6) + `}{` + d.toFixed(3) + `} = 1.25 \\times \\big( \\frac{` + as + `}{` + b + `\\times ` + d.toFixed(3) + `} \\big) \\times \\big( \\frac{` + fyd.toFixed(3) + `}{` + alpha + ` \\times ` + fcd.toFixed(3) + `} \\big) \\le ` + ksimax + ` $`}</Latex>
                                        </p>
                                        <p>
                                            <Latex>{`$\\xi = ` + ksi.toFixed(3) + ` \\le ` + ksimax + ` $`}</Latex>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h4>Moment únostnosti</h4>
                                    <div>
                                        <p><Latex>{`$z = d - 0.4x$`}</Latex></p>
                                        <p><Latex>{`$z = ` + d.toFixed(3) + ` - 0.4 \\times ` + x.toFixed(6) + ` $`}</Latex>
                                        </p>
                                        <p><Latex>{`$z = ` + z.toFixed(6) + `$`}</Latex></p>
                                        <div></div>
                                        <p><Latex>{`$M_{RD} = A_s \\times f_{yd} \\times z$`}</Latex></p>
                                        <p>
                                            <Latex>{`$M_{RD} = ` + as + ` \\times ` + fyd.toFixed(3) + ` \\times ` + z.toFixed(6) + `$`}</Latex>
                                        </p>
                                        <p><Latex>{`$M_{RD} = ` + mrd.toFixed(6) + ` \\text{MNm}$`}</Latex></p>
                                    </div>
                                    <div>
                                        <p><Latex>{`$M_{RD} \\ge M_{Sd}$`}</Latex></p>
                                        {
                                            mrd >= msd
                                                ? <>
                                                    <p><Latex>{`$` + mrd.toFixed(6) + ` \\ge ` + msd + `$`}</Latex></p>
                                                    <h3>Návrh {} <span style={{color: "var(--color7)"}}>Vyhovuje!</span></h3>
                                                </>
                                                : <>
                                                    <p><Latex>{`$` + mrd.toFixed(6) + ` \\ngeqslant ` + msd + `$`}</Latex></p>
                                                    <h3 style={{color: "var(--colorWarning)"}}>Veľký problém,
                                                        návrh {} nevyhovuje</h3>
                                                </>
                                        }
                                    </div>
                                </div>
                            </section>
                        </div>
                        : null
                }
                {
                    dlzkaDosky || hrubkaDosky || moment || beton || nosnaOcel || rozdelovaciaOcel
                        ? <button onClick={() => {
                            window.location.reload()
                        }}>Reset</button>
                        : null
                }

            </div>
            <SpatNa text={"Staviteľstvo"} link={"/stavitelstvo"}/>
        </>
    );
};

export default Vystuz;
