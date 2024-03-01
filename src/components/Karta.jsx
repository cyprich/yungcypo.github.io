import React from 'react';
import {useNavigate} from "react-router-dom";


const Karta = ({nadpis, popis, link, obrazok}) => {
    const navigate = useNavigate();

    return (
        <div
            className={"group hover:scale-105 flex flex-col items-center w-full h-max drop-shadow-xl cursor-pointer"}
            onClick={() => {
                navigate(link)
            }}>
            <div className={"flex justify-center items-center aspect-square bg-gray-500/5 border border-red-50 group-hover:border-red-100 rounded-t-2xl"}>
                <img className={"group-hover:scale-105 drop-shadow-2xl rounded-t-2xl"} src={obrazok} alt=""/>
            </div>
            <div className={"p-6 border-gray-950 w-full bg-red-50 group-hover:bg-red-100 rounded-b-2xl"}>
                <p className={"text-xl font-bold"}>{nadpis}</p>
                <p className={"text-gray-200"}>{popis}</p>
            </div>
        </div>
    );
};

export default Karta;