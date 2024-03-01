import React from 'react';
import TextareaAutosize from "react-textarea-autosize";

import kontakt from "../../constants/kontakt";
import {Link} from "react-router-dom";

const Kontakt = () => {
    return (
        <section className={"flex flex-col gap-10 px-36 py-16"}>
            <div className={"flex justify-between items-center"}>
                <div className={"flex flex-col gap-3 border border-gray-200 rounded-2xl p-8 w-1/2"}>
                    <div>
                        <p className={"mx-1 my-0.5 text-gray-300"}>Máš otázky?</p>
                        <p className={"text-5xl mb-3 font-bold"}>Napíš mi</p>
                    </div>
                    <div className={"flex gap-3"}>
                        <input className={"w-2/3"} type="text" placeholder={"Meno"}/>
                        <input className={"w-full"} type="text" placeholder={"E-mail"}/>
                    </div>
                    <TextareaAutosize className={"customscrollbar"} minRows={4} maxRows={10} placeholder={"Správa"}/>
                    <button className={"button button-red rounded-xl"}>Odoslať</button>
                </div>
                <img className={"h-96 drop-shadow-xl"} src={require("../../images/3danimals/lenochod.png")}
                     alt=""/>
            </div>
            <div className={"grid grid-cols-9 gap-8"}>
                {
                    kontakt.map((e, key) => {
                        return (
                            <Link
                                className={"group bg-transparent border p-6 rounded-full hover:scale-105 hover:bg-gray-500/5 drop-shadow-2xl"}
                                style={{borderColor: e.farba}} to={e.link} target={"_blank"}
                                title={e.nazov + " : " + e.username}>
                                <img className={"group-hover:scale-110 drop-shadow-2xl"} src={e.obrazok} alt=""
                                     key={key}/>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Kontakt;