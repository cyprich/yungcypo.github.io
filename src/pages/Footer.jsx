import React, {useState} from 'react';
import {Link} from "react-router-dom";

import "../css/styles.css"
import "../css/footer.css"

import kontakt from "../constants/kontakt";

const Footer = () => {
    const [footerHovered, setFooterHovered] = useState(null);
    const handleFooterMouseEnter = (e) => {
        setFooterHovered(e)
    }
    const handleFooterMouseLeave = () => {
        setFooterHovered(null)
    }

    return (
        <footer id={"footer"} className={"footer"}>
            <div className={"footerprvacast"}>
                <p>Cypo's Website <span style={{color: "var(--color7)"}}>v3.0.0</span></p>
                <Link to={"/updates"} className={"footerupdates"}>Updates</Link>
            </div>
            <div className={"footerdruhacast"}>
                <p>2020 - 2024</p>
                <div className={"footerobrazky"}>
                    {
                        kontakt.map((e, key) => {
                            return (
                                <Link
                                    to={e.link}
                                    target={"_blank"}
                                    onMouseEnter={() => {
                                        handleFooterMouseEnter(e.nazov)
                                    }}
                                    onMouseLeave={() => {
                                        handleFooterMouseLeave()
                                    }}
                                    key={key}
                                >
                                    <img src={
                                        footerHovered === e.nazov
                                            ? e.ikonka.farebna
                                            : e.ikonka.bezfarebna
                                    } alt="" />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;
