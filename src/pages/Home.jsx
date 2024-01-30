import React, {useState} from 'react';
import "../css/styles.css"
import "../css/home.css"

import CasovaOs from "./CasovaOs";
import Carousel from "./Carousel";

import mudrosti from "../constants/mudrosti"
import kontakt from "../constants/kontakt";

import background from "../images/background.webp"
import {ReactComponent as HumanIcon} from "../images/icons/human.svg";
import {ReactComponent as HomeIcon} from "../images/icons/home.svg";
import {ReactComponent as SchoolIcon} from "../images/icons/school.svg";
import {ReactComponent as SchoolDoneIcon} from "../images/icons/schooldone.svg";
import {Link} from "react-router-dom";

const Home = () => {
    const [nahodnaMudrost, setNahodnaMudrost] = useState(Math.floor(Math.random() * mudrosti?.length));

    const [hoveredKontakt, setHoveredKontakt] = useState(null);
    const handleKontaktMouseEnter = (nazov) => {
        setHoveredKontakt(nazov)
    }
    const handleKontaktMouseLeave = () => {
        setHoveredKontakt(null)
    }

    return (
        <main>
            <div className={"landing"} style={{
                width: '100vw',
                backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.8), rgba(0,0,0, 0.7), rgba(0,0,0, 0.1)), url(${background})`,
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <h1>Peter</h1>
                <h1>Cyprich</h1>
                <p>{mudrosti[nahodnaMudrost]}</p>
            </div>
            <div id="omne" className={"homeComponent"}>
                <h2>O mne</h2>
                <hr/>
                <div className={"omneContainer"}>
                    <div className="omneNapisy">
                        <div className={"omneContent"}>
                            <HumanIcon class={"omneIcon"}/>
                            <div>
                                <h3>
                                    Peter
                                    <span>Cypo</span>
                                    Cyprich
                                </h3>
                                <h5 style={{fontWeight: 300}}>Since 2003</h5>
                            </div>
                        </div>
                        <div className={"omneContent"}>
                            <HomeIcon class={"omneIcon"}/>
                            <h3>
                                <span style={{paddingLeft: '0'}}>Prievidza,</span>
                                Slovensko
                            </h3>
                        </div>
                        <div className={"omneContent"}>
                            <SchoolIcon class={"omneIcon"}/>
                            <h3>
                                <span style={{paddingLeft: '0'}}>Fakulta riadenia a informatiky,</span>
                                UNIZA
                                <p>Informačné a sieťové technológie</p>
                            </h3>
                        </div>
                        <div className={"omneContent"}>
                            <SchoolDoneIcon class={"omneIcon"}/>
                            <h3>
                                <span>SOŠ T. Vansovej</span>, Prievidza
                                <p>Technické a Informatické služby v stavebníctve</p>
                            </h3>
                        </div>
                    </div>
                    <div className="animacia" style={{visibility: "inherit"}}>
                        {/*TODO: nieco s Three.JS*/}
                        <h3><i>✨toto✨</i></h3>
                        <img src={require("../images/toto.jpg")} alt=""/>
                    </div>

                </div>
                <hr style={{margin: '0 1em'}}/>
                <CasovaOs/>
            </div>
            <div id="projekty" className={"homeComponent"}>
                <Carousel/>
            </div>
            <div id="kontakt" className={"homeComponent kontakt"}>
                <h2>Kontakt</h2>
                <h4 style={{textAlign: "center"}}>A linky na ostatné sociálne siete</h4>
                <div className="linky">
                    {
                        kontakt.map((k, key) => {
                            return (
                                <Link
                                    to={k.link}
                                    target={"_blank"}
                                    className="link"
                                    key={key}
                                    title={k.nazov}
                                    onMouseEnter={() => {
                                        handleKontaktMouseEnter(k.nazov)
                                    }}
                                    onMouseLeave={() => {
                                        handleKontaktMouseLeave()
                                    }}
                                    style={
                                        hoveredKontakt === k.nazov
                                            ? {
                                                borderColor: k.farba,
                                                boxShadow: k.farba + " 1px 1px 16px"
                                            }
                                            : null
                                    }
                                >
                                    <img src={k.ikonka.bezfarebna} alt="" title={k.nazov}/>
                                    <div className={"pismenka"}>
                                        <p>{k.username}</p>
                                        {
                                            k.poznamka
                                                ? <p style={{color: "var(--color9)"}}>{k.poznamka}</p>
                                                : null
                                        }
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default Home;