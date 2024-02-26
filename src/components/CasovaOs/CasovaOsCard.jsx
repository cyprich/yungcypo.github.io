import React from 'react';

const CasovaOsCard = ({nadpis, podnadpis, popis, obrazky, datum, datumnakoniec}) => {
    return (
        <div className={"flex flex-col gap-1 p-8 m-4 w-128 h-max bg-transparent border border-red-900 rounded-2xl drop-shadow-xl"}>
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
        </div>
    );
};

export default CasovaOsCard;