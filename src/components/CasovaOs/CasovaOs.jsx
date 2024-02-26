import React from 'react';
import CasovaOsCard from "./CasovaOsCard";

import Stlpik from "./Stlpik";

const CasovaOs = ({subor}) => {
    return (
        <ul className={""}>
            {
                subor.map((e, key) => {
                    return (
                        <li className={"grid grid-cols-[1fr_auto_1fr] gap-4 [&:nth-child(odd)>*]:justify-self-end [&:last-child>*:nth-child(2)]:pb-4"} key={key}>
                            {
                                key % 2 === 0
                                    ? <CasovaOsCard{...e}/>
                                    : <div/>
                            }
                            <Stlpik id={key + 1}/>
                            {
                                key % 2 === 1
                                    ? <CasovaOsCard{...e}/>
                                    : <div/>
                            }
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default CasovaOs;