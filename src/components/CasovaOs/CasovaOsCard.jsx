import React from 'react';

import Kruzok from "./Kruzok";

const CasovaOsCard = ({nadpis, podnadpis, popis, obrazky, datum, datumnakoniec, align}) => {
    return (
        <li className={"flex flex-col gap-1 p-8 m-4 w-128 h-max bg-transparent border border-gray-500 rounded-2xl even:justify-self-start odd:justify-self-end"}>
            <p className={"font-bold text-xl"}>{nadpis} <span className={"text-gray-400 font-normal text-md"}>{podnadpis}</span></p>
            {!datumnakoniec && <p className={"text-gray-400"}>{datum}</p>}
            {popis && <ul>
                {
                    popis.map((f, key) => {
                        return <li key={key}>{f}</li>
                    })
                }
            </ul>}
            {datumnakoniec && <p>{datum}</p>}
        </li>
    );
};

export default CasovaOsCard;