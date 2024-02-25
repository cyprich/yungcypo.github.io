import React from 'react';
import CasovaOsElement from "./CasovaOsElement";

const CasovaOs = ({subor}) => {
    return (
        <section>
            <ul>
                {
                    subor.map((e, key) => {
                        return (
                            <CasovaOsElement {...e} key={key}/>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default CasovaOs;