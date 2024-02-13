import React, {useState} from 'react';

import "../css/styles.css";
import "../css/header.css";

import projekty from "../constants/projekty";
import kontakt from "../constants/kontakt";

import {ReactComponent as Smile} from "../images/icons/smile.svg";
import {ReactComponent as Menu} from "../images/icons/menu.svg";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const [ikonkaHovered, setIkonkaHovered] = useState(null);
    const [menuActive, setMenuActive] = useState(false);
    const [menuActiveDropdown, setMenuActiveDropdown] = useState(null);

    const handleHover = (e) => {
        setIkonkaHovered(e)
    }
    const handleUnhover = () => {
        setIkonkaHovered(null)
    }

    const handleMenuActiveDropdown = (e) => {
        if (e == menuActiveDropdown) {
            setMenuActiveDropdown(null)
        } else {
            setMenuActiveDropdown(e)
        }
    }


    return (
        <header id={"header"}>
            <div className={"headerwrapper"}>
                <div>
                    <Link to={"/"}>
                        <Smile/>
                    </Link>
                </div>
                <div className={"nophone"}>
                    <div className={"headerpismenka"}>
                        <div>
                            <Link to={"/"}>Domov</Link>
                        </div>
                        <div>
                            <p>Projekty</p>
                            <div className={"headerdropdown projektydropdown"}>
                                {
                                    projekty.map((e, key) => {
                                        return (
                                            <Link to={e.link} key={key}>
                                                <img src={e.icon} alt="" style={{filter: "invert(1)"}}/>
                                                <div>
                                                    <h4>{e.title}</h4>
                                                    <p>{e.description}</p>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <p>Kontakt</p>
                            <div className={"headerdropdown kontaktydropdown"}>
                                <div>
                                    <h4>Kontakty</h4>
                                    <div>
                                        {
                                            kontakt.map((e, key) => {
                                                if (!e.linknamiestokontaktu) {
                                                    return (
                                                        <Link
                                                            to={e.link}
                                                            key={key}
                                                            onMouseEnter={() => {
                                                                handleHover(e.nazov)
                                                            }}
                                                            onMouseLeave={() => {
                                                                handleUnhover()
                                                            }}
                                                            target={"_blank"}
                                                        >
                                                            <img
                                                                src={
                                                                    ikonkaHovered === e.nazov
                                                                        ? e.ikonka.farebna
                                                                        : e.ikonka.bezfarebna
                                                                }
                                                                alt=""
                                                            />
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <h4>Ostatné linky</h4>
                                    <div>
                                        {
                                            kontakt.map((e, key) => {
                                                if (e.linknamiestokontaktu) {
                                                    return (
                                                        <Link
                                                            to={e.link}
                                                            key={key}
                                                            onMouseEnter={() => {
                                                                handleHover(e.nazov)
                                                            }}
                                                            onMouseLeave={() => {
                                                                handleUnhover()
                                                            }}
                                                            target={"_blank"}
                                                        >
                                                            <img
                                                                src={
                                                                    ikonkaHovered === e.nazov
                                                                        ? e.ikonka.farebna
                                                                        : e.ikonka.bezfarebna
                                                                }
                                                                alt=""
                                                            />
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="phone">
                    <Menu onClick={() => {
                        setMenuActive(!menuActive)
                    }} className={menuActive ? "rotate" : null}/>
                    {
                        menuActive && <div className="menuactive">
                            <div>
                                <p
                                    onClick={() => {handleMenuActiveDropdown("domov")}}
                                    className={menuActiveDropdown === "domov" ? "vyrazne" : null}
                                >
                                    <Link to={"/"} onClick={() => {setMenuActive(false)}}>Domov</Link>
                                </p>
                            </div>
                            <div>
                                <p
                                    onClick={() => {handleMenuActiveDropdown("projekty")}}
                                    className={menuActiveDropdown === "projekty" ? "vyrazne" : null}
                                >
                                    Projekty
                                </p>
                                {
                                    menuActiveDropdown == "projekty" && <div className={"menuactivedropdown"}>
                                        {
                                            projekty.map((e, key) => {
                                                return (
                                                    <Link to={e.link} onClick={() => {setMenuActive(false)}} key={key}>
                                                        <img src={e.icon} alt="" style={{filter: "invert(1)"}}/>
                                                        <p>{e.title}</p>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>
                            <div>
                                <p
                                    onClick={() => {handleMenuActiveDropdown("kontakt")}}
                                    className={menuActiveDropdown === "kontakt" ? "vyrazne" : null}
                                >
                                    Kontakt
                                </p>
                                {
                                    menuActiveDropdown == "kontakt" && <div className={"menuactivedropdown"}>
                                        {
                                            kontakt.map((e, key) => {
                                                if (!e.linknamiestokontaktu){
                                                    return (
                                                        <Link to={e.link} onClick={() => {setMenuActive(false)}} target={"_blank"} key={key}>
                                                            <img src={e.ikonka.bezfarebna} alt=""/>
                                                            <p>{e.username}</p>
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                }
                            </div>
                            <div>
                                <p
                                    onClick={() => {handleMenuActiveDropdown("linky")}}
                                    className={menuActiveDropdown === "linky" ? "vyrazne" : null}
                                >
                                    Ostatné linky
                                </p>
                                {
                                    menuActiveDropdown == "linky" && <div className={"menuactivedropdown"}>
                                        {
                                            kontakt.map((e, key) => {
                                                if (e.linknamiestokontaktu){
                                                    return (
                                                        <Link to={e.link} target={"_blank"} key={key}>
                                                            <img src={e.ikonka.bezfarebna} alt=""/>
                                                            <p>{e.username}</p>
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
