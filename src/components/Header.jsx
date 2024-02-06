import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../css/styles.css";
import "../css/header.css";

import {ReactComponent as Smile} from "../images/icons/smile.svg";

import projekty from "../constants/projekty";
import kontakt from "../constants/kontakt";

const Header = () => {
    const [projektyHovered, setProjektyHovered] = useState(false);
    const [kontaktyHovered, setKontaktyHovered] = useState(false);

    const [hoveredKontaktLink, setHoveredKontaktLink] = useState(null);
    const handleKontaktMouseEnter = (nazov) => {
        setHoveredKontaktLink(nazov)
    }
    const handleKontaktMouseLeave = () => {
        setHoveredKontaktLink(null)
    }

    return (
        <header id={"header"}>
            <div className="headerprvyriadok">
                <div className={"napisy"}>
                    <Link to={"/"}><p>Domov</p></Link>
                    <div
                        onMouseEnter={() => {
                            setProjektyHovered(true)
                        }}
                        onMouseLeave={() => {
                            setProjektyHovered(false)
                        }}
                    >
                        <p style={projektyHovered ? {color: "var(--color7)"} : null}>Projekty</p>
                    </div>
                    <div
                        onMouseEnter={() => {
                            setKontaktyHovered(true)
                        }}
                        onMouseLeave={() => {
                            setKontaktyHovered(false)
                        }}>
                        <p style={kontaktyHovered ? {color: "var(--color7)"} : null}>Kontakt</p>
                    </div>
                </div>
                <div className={"smile"}>
                    <Smile id={"smile"}/>
                </div>
            </div>
            <div
                className={"headerdruhyriadok"}
                style={
                    projektyHovered
                        ? {transform: "translateY(0)", opacity: 100}
                        : {transform: "translateY(calc(-100% - 4em))", opacity: 0}
                }>
                {projekty.map((projekt, key) => {
                    return (
                        <Link to={projekt.link} className={"headerdruhyriadoklink"} key={key}>
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
                                key={key}
                            >
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
            <div
                className="headertretiriadok"
                style={
                    kontaktyHovered
                        ? {transform: "translateY(0)", opacity: 100}
                        : {transform: "translateY(calc(-100% - 4em))", opacity: 0}
                }
                onMouseEnter={
                    kontaktyHovered
                        ? () => {
                            setKontaktyHovered(true)
                        }
                        : null
                }
                onMouseLeave={() => {
                    setKontaktyHovered(false)
                }}
                onClick={() => {
                    setKontaktyHovered(false)
                }}
            >
                <div className={"headerkontakty"}>
                    <h4 style={{paddingTop: 0}}>Kontakty</h4>
                    {kontakt.map((k, key) => {
                        return (
                            k.linknamiestokontaktu
                                ? null
                                : <Link
                                    to={k.link}
                                    className="headerkontakt"
                                    target={"_blank"}
                                    key={key}
                                    onMouseEnter={() => {
                                        handleKontaktMouseEnter(k.nazov)
                                    }}
                                    onMouseLeave={() => {
                                        handleKontaktMouseLeave()
                                    }}
                                >
                                    <img
                                        src={
                                            hoveredKontaktLink === k.nazov
                                                ? k.ikonka.farebna
                                                : k.ikonka.bezfarebna
                                        }
                                        alt=""
                                        title={k.nazov + ": " + k.username}/>
                                </Link>
                        )
                    })}
                </div>
                <div className={"headernekontakty"} style={{paddingBottom: "0.5em"}}>
                    <h4>Ostatné linky</h4>
                    {kontakt.map((k, key) => {
                        return (
                            k.linknamiestokontaktu
                                ? <Link
                                    to={k.link}
                                    className="headernekontakt"
                                    target={"_blank"}
                                    key={key}
                                    onMouseEnter={() => {
                                        handleKontaktMouseEnter(k.nazov)
                                    }}
                                    onMouseLeave={() => {
                                        handleKontaktMouseLeave()
                                    }}>
                                    <img src={
                                        hoveredKontaktLink === k.nazov
                                            ? k.ikonka.farebna
                                            : k.ikonka.bezfarebna
                                    }
                                         alt=""
                                         title={k.nazov + ": " + k.username}/>
                                </Link>

                                : null
                        )
                    })}
                </div>

            </div>
        </header>
    );
};

export default Header;
