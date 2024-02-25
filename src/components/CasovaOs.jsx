import React from 'react';
import CasovaOsElement from "./CasovaOsElement";

const CasovaOs = ({subor}) => {
    return (
        <section>
            {
                subor.map((e, key) => {
                    return (
                        <CasovaOsElement {...e} key={key}/>
                    )
                })
            }
        </section>
    );
};

export default CasovaOs;