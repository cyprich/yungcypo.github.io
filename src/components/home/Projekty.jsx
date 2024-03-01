import React from 'react';
import projekty from "../../constants/projekty";
import Karta from "../Karta";

const Projekty = () => {
    return (
        <section className={"w-full min-h-96 bg-red-800 px-12 py-8"}>
            <h2 className={"text-6xl font-bold pb-10 text-center text-gray-950"}>Projekty</h2>
            <div className={"grid grid-cols-4 gap-12 pb-6"}>
                {
                    projekty.map((e, key) => {
                        return (
                            <Karta
                                nadpis={e.title}
                                popis={e.description}
                                obrazok={e.image}
                                link={e.link}
                                key={key}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Projekty;