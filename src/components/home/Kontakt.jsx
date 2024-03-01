import React from 'react';
import TextareaAutosize from "react-textarea-autosize";

const Kontakt = () => {
    return (
        <section className={"flex justify-between items-center px-36 py-16"}>
            <div className={"flex flex-col gap-3 border border-gray-200 rounded-2xl p-8 w-1/2"}>
                <p className={"text-3xl font-bold"}>Kontakt</p>
                <input type="text" placeholder={"Meno"}/>
                <input type="text" placeholder={"E-mail"}/>
                <TextareaAutosize className={"customscrollbar"} minRows={3} maxRows={10} placeholder={"Správa"}/>
                <button className={"button button-red rounded-xl"}>Odoslať</button>
            </div>
            <img className={"h-96 drop-shadow-xl"} src={require("../../images/3danimals/medvedikcistotny.png")} alt=""/>
        </section>
    );
};

export default Kontakt;