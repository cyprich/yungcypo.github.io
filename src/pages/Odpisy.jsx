import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import "../css/styles.css"
import "../css/odpisy.css"

import odpisoveskupiny from "../constants/odpisoveskupiny"


const koeficienty = {
    skupina2: {
        prvyrok: 6,
        dalsieroky: 7,
    },
    skupina3: {
        prvyrok: 8,
        dalsieroky: 9,
    },
    ostatne: "Nemožno odpisovať zrýchlene"
}

const Odpisy = () => {
    const dnesnyMesiac = new Date().getMonth() + 1;
    const dnesnyRok = new Date().getFullYear();

    console.log(dnesnyMesiac)
    console.log(dnesnyRok)

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"odpisy projekt"}>

        </div>
    );


};

export default Odpisy;
