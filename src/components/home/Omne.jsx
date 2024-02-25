import React from 'react';

import OmneItem from "./OmneItem";

const Omne = () => {
    return (
        <section className={"grid grid-cols-4 p-8 gap-8"}>
            <OmneItem text={"Prievidza"}/>
            <OmneItem text={"4. 6. 2003"}/>
            <OmneItem text={"FRI UNIZA"}/>
            <OmneItem text={"4. 6. 2003"}/>
        </section>
    );
};

export default Omne;
