import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import kontakt from "../constants/kontakt";

const Kontakt = () => {
    const [hoveredKontakt, setHoveredKontakt] = useState(null);
    const handleKontaktMouseEnter = (nazov) => {
        setHoveredKontakt(nazov)
    }
    const handleKontaktMouseLeave = () => {
        setHoveredKontakt(null)
    }

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"kontakt"}>
            <h2>Kontakt</h2>
            <h4>A linky na ostatné sociálne siete</h4>
            <div className="wraplinky">
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
        </div>
    );
};

export default Kontakt;
