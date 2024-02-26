import React, {Fragment} from 'react';
import CasovaOsElement from "./CasovaOsElement";
import CasovaOsCard from "./CasovaOsCard";

import Kruzok from "./Kruzok";
import Stlpik from "./Stlpik";

const CasovaOs = ({subor}) => {
    return (
        <section>
            <ul className={"grid grid-cols-[1fr_auto_1fr] gap-4"}>
                {
                    subor.map((e, key) => {
                        return (
                            <Fragment key={key}>
                                {
                                    key % 2 === 0
                                        ? <CasovaOsCard{...e}/>
                                        : <div/>
                                }
                                <Stlpik/>
                                {
                                    key % 2 === 1
                                        ? <CasovaOsCard{...e}/>
                                        : <div/>
                                }
                            </Fragment>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default CasovaOs;