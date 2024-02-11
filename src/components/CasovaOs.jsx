import React, {useState} from 'react';

import "../css/styles.css"
import "../css/casovaOs.css"

import {ReactComponent as Close} from "../images/icons/close.svg";
import ImageLoader from "./ImageLoader";

const CasovaOs = ({file}) => {
    const [popupActive, setPopupActive] = useState(false);
    const [popupImage, setPopupImage] = useState(null);
    const [popupPopis, setPopupPopis] = useState(null);

    return (
        <>
            {
                popupActive && <div
                    className="threedhistoriapopup"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        width: "100%",
                        height: "100%",
                        zIndex: 20,
                        padding: "3em",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1em"
                    }}
                >
                    <img
                        src={popupImage}
                        alt=""
                        style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                        }}
                    />
                    <div
                        style={{
                            width: "3em",
                            height: "3em",
                            position: "fixed",
                            top: "2em",
                            right: "2em",
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            setPopupActive(false)
                        }}
                    >
                        <Close style={{fill: "white", width: "100%", height: "100%"}}/>
                    </div>
                    {
                        popupPopis && <p>{popupPopis}</p>
                    }
                </div>
            }
            <div className={popupActive ? "casovaOs nooverflow" : "casovaOs"}>
                {file.map((e, key) => {
                    return (
                        <div
                            className={"casovaOsElement"}
                            style={
                                e.align ? {textAlign: e.align} : null}
                            key={key}>
                            <div style={e.align ? {alignItems: e.align} : null}>
                                <h4><span>{e?.nadpis}</span>{e?.podnadpis}</h4>
                                {
                                    e.datumnakoniec
                                        ? null
                                        : <p className={"casovaOsDatum"}>{e.datum}</p>
                                }
                                {
                                    e.popis
                                        ? e.popis.map((f, key) => {
                                            return (
                                                <p key={key}>{f}</p>
                                            )
                                        })
                                        : null
                                }
                                {
                                    e.obrazky
                                        ? <div className={"casovaOsObrazky"} style={
                                            e.obrazky.length == 1
                                                ? {gridTemplateColumns: "1fr"}
                                                : {gridTemplateColumns: "1fr 1fr"}

                                        }>
                                            {
                                                e.obrazky.map((g, key) => {
                                                    return (
                                                        <div className={"casovaOsObrazok"} onClick={() => {
                                                            setPopupActive(true)
                                                            setPopupImage(g.zdroj)
                                                            setPopupPopis(g.popis)
                                                        }}>
                                                            <ImageLoader src={g.zdroj} alt="" key={key}/>
                                                            <p>{g.popis}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        : null
                                }
                                {
                                    e.datumnakoniec
                                        ? <p className={"casovaOsDatum"}>{e.datum}</p>
                                        : null
                                }
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    );
};

export default CasovaOs;
