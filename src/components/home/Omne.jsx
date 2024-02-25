import React from 'react';

import OmneItem from "./OmneItem";

const Omne = () => {
    return (
        <section className={"grid grid-cols-3 px-48 py-12 gap-16"}>
            <OmneItem text={"Prievidza"} src={require("../../images/3dicons/house.png")}/>
            <OmneItem text={"4. 6. 2003"} src={require("../../images/3dicons/calendar.png")}/>
            <OmneItem text={"FRI UNIZA"} src={require("../../images/3dicons/computer.png")}/>
        </section>
    );
};

export default Omne;
