import React from 'react';

import OmneItem from "./OmneItem";

import {ReactComponent as Wave1} from "../../images/wave1.2.svg";
import {ReactComponent as Wave2} from "../../images/wave2.2.svg";

const Omne = () => {
    return (
        <>
            <ul className={"relative grid grid-cols-3 mt-8 px-48 py-16 gap-16 bg-red-100"}>
                <Wave1 class={"absolute top-[-32px]"}/>
                <OmneItem text={"Prievidza"} src={require("../../images/3dicons/house.png")}/>
                <OmneItem text={"4. 6. 2003"} src={require("../../images/3dicons/calendar.png")}/>
                <OmneItem text={"FRI UNIZA"} src={require("../../images/3dicons/computer.png")}/>
                <Wave2 class={"absolute bottom-[-32px]"}/>
            </ul>
        </>
    );
};

export default Omne;
