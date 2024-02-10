import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

import "../css/styles.css"
import "../css/updates.css"

import updates from "../constants/updates"

const Updates = () => {
    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | Updates"
    }, []);

    return (
        <div className={"updatesmain projekt"}>
            <div className={"updatesnadpisy"}>
                <h2>Updates</h2>
                <h4>
                    <i style={{fontWeight: "lighter", fontSize: "0.9em", paddingRight: "0.125em"}}>a.k.a. </i>Aktualizácie, verzie, história, ...
                </h4>
            </div>
            <div className="updates">
                {
                    updates.map((e, key) => {
                        return (
                            <div className="update" key={key}>
                                <div className={"updatetext"}>
                                    <h3>{e.verzia}</h3>
                                    {
                                        e.poznamky
                                            ? <div className={"updatepoznamky"}>
                                                {
                                                    e.poznamky.map((f, key) => {
                                                        return (
                                                            <p key={key}>{f}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                            : null
                                    }
                                    {
                                        e.datum
                                            ?
                                            <p className="updatedatum">Dátum poslednej
                                                úpravy: {e.datum.den}. {e.datum.mesiac}. {e.datum.rok}</p>
                                            : null
                                    }
                                    {
                                        e.zmeny
                                            ? <ul className={"updatefunkcie"}>
                                                <p>Zmeny: </p>
                                                {e.zmeny.map((f, key) => {
                                                    return (
                                                        <li className={"updatefunkcia"} key={key}>{f}</li>
                                                    )
                                                })}
                                            </ul>
                                            : null
                                    }
                                    {
                                        e.link
                                            ? <div className={"updatelinky"}>
                                                <Link to={e.link.branch}>Zobraziť zdrojový kód</Link>
                                                <Link to={e.link.download}>Stiahnuť zdrojový kód</Link>
                                            </div>
                                            : null
                                    }
                                </div>
                                <div className="updateimage">
                                    <h4>Ukážka</h4>
                                    <img src={
                                        e.preview
                                            ? e.preview
                                            : null
                                    } alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Updates;
