import React from 'react';

import "../css/styles.css"
import "../css/casovaOs.css"

const CasovaOs = ({file}) => {
    return (
        <>
            <div className={"casovaOs"}>
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
                                                        <div className={"casovaOsObrazok"}>
                                                            <img src={g.zdroj} alt="" key={key}/>
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
