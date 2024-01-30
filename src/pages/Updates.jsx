import React from 'react';
import {Link} from "react-router-dom";

import "../css/styles.css"
import "../css/updates.css"

import updates from "../constants/updates"

const Updates = () => {
    return (
        <div className={"updatesmain projekt"}>
            <h2>Updates</h2>
            <h4><i style={{fontWeight: "lighter", fontSize: "0.9em"}}>a.k.a.</i> Aktualizácie, verzie, história, ...
            </h4>
            <div className="updates">
                {
                    updates.map((e) => {
                        return (
                            <div className="update">
                                <div className={"updatetext"}>
                                    <h3>{e.verzia}</h3>
                                    {
                                        e.poznamky
                                            ? <div className={"updatepoznamky"}>
                                                {
                                                    e.poznamky.map((f) => {
                                                        return (
                                                            <p>{f}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                            : null
                                    }
                                    {
                                        e.datum
                                            ?
                                            <p className="updatedatum">Dátum poslednej úpravy: {e.datum.den}. {e.datum.mesiac}. {e.datum.rok}</p>
                                            : null
                                    }
                                    {
                                        e.zmeny
                                            ? <ul className={"updatefunkcie"}>
                                                <p>Zmeny: </p>
                                                {e.zmeny.map((f) => {
                                                    return (
                                                        <li className={"updatefunkcia"}>{f}</li>
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
