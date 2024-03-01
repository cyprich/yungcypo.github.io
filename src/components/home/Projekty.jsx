import React from 'react';
import projekty from "../../constants/projekty";
import Karta from "../Karta";

const Projekty = () => {
    return (
        <>
            <svg className={"fill-red-800"} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 50">
                <path
                    d="m0 32.44 37.08.97c36.94 1.04 111.53 2.87 185.14-.97 74.03-3.84 148.61-13.72 222.22-19.52 74.03-5.91 148.61-7.74 222.22-6.82 74.03.91 148.61 4.94 222.22 7.81 74.03 2.98 148.61 4.81 222.22 7.79 74.03 2.87 148.61 6.9 222.22 4.88 74.03-2.01 148.61-9.69 222.22-15.6 74.03-5.8 148.61-9.82 222.22-10.74 74.03-.91 148.61.91 184.72 1.96l37.5.97V50H0V32.44Z"
                    />
            </svg>
            <section className={"w-full min-h-96 bg-red-800 px-12 py-4"}>
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
            <svg className={"fill-red-800"} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 50">
                <path
                    d="m0 50 37.08-2.78c36.94-2.78 111.53-8.33 185.14-10.19 74.03-1.79 148.61-.05 222.22-3.7 74.03-3.65 148.61-13.02 222.22-15.75 74.03-2.83 148.61.99 222.22 7.41 74.03 6.42 148.61 15.8 222.22 12.97 74.03-2.73 148.61-17.66 222.22-19.44 74.03-1.86 148.61 9.25 222.22 10.17 74.03.99 148.61-8.39 222.22-8.33 74.03-.05 148.61 9.32 184.72 13.89l37.5 4.64V0H0v50Z"
                    />
            </svg>
        </>
    );
};

export default Projekty;