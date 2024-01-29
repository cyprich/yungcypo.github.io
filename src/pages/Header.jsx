import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../css/styles.css";
import "../css/header.css";

import {ReactComponent as Smile} from "../images/icons/smile.svg";

import projekty from "../constants/projekty";

const Header = () => {
    const [projektyHovered, setProjektyHovered] = useState(false);
    return (
        <header id={"header"}>
            <div className="headerprvyriadok">
                <div className={"napisy"}>
                    <Link to={"/"}><p>Domov</p></Link>
                    <Link to={"/projekty"}
                          onMouseEnter={() => {
                              setProjektyHovered(true)
                          }}
                          onMouseLeave={() => {
                              setProjektyHovered(false)
                          }}
                    ><p>Projekty</p></Link>
                    <Link to={"/kontakt"}><p>Kontakt</p></Link>
                </div>
                <div className={"smile"}>
                    <Smile id={"smile"}/>
                </div>
            </div>
            <div className={"headerdruhyriadok"}
                 style={
                     projektyHovered
                         ? {transform: "translateY(0)", opacity: 100}
                         : {transform: "translateY(calc(-100% - 4em))", opacity: 0}
                 }>
                {projekty.map((projekt, key) => {
                    return (
                        <Link to={projekt.link} className={"headerdruhyriadoklink"}>
                            <div
                                className={"headerprojekt"}
                                onMouseEnter={
                                    projektyHovered
                                        ? () => {
                                            setProjektyHovered(true)
                                        }
                                        : null
                                }
                                onMouseLeave={() => {
                                    setProjektyHovered(false)
                                }}
                                onClick={() => {
                                    setProjektyHovered(false)
                                }}
                                key={key}>

                                <img src={projekt.icon} alt=""
                                     style={{width: "2em", height: "2em", filter: "invert(1)"}}/>
                                <div className={"headerprojektpismenka"}>
                                    <p>{projekt.title}</p>
                                    <p>{projekt.description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </header>
    );
};

export default Header;
