import React from 'react';
import "../css/styles.css"
import "../css/home.css"

import background from "../images/background.webp"
import CasovaOs from "../components/casovaOs";
import Carousel from "../components/carousel";

import {ReactComponent as HumanIcon} from "../images/icons/human.svg";
import {ReactComponent as HomeIcon} from "../images/icons/home.svg";
import {ReactComponent as SchoolIcon} from "../images/icons/school.svg";
import {ReactComponent as SchoolDoneIcon} from "../images/icons/schooldone.svg";

const Home = () => {
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
                <p>Kto druhému zaseje, tak za z hory ozýva</p>
            </div>
            <div id="omne" className={"homeComponent"}>
                <h2>O mne</h2>
                <hr/>
                <div className={"omneContainer"}>
                    <div className="omneNapisy">
                        <div className={"omneContent"}>
                            <HumanIcon class={"omneIcon"}/>
                            <h3>
                                Peter
                                <span>Cypo</span>
                                Cyprich
                            </h3>
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
            <div id="kontakt" className={"homeComponent"}>
                <h2>Kontakt</h2>
            </div>
        </main>
    );
};

export default Home;