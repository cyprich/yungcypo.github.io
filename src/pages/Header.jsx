import React from 'react';
import {Link} from "react-router-dom";
import "../css/styles.css";
import "../css/header.css";

import { ReactComponent as Smile } from "../images/icons/smile.svg";


const Header = () => {

    return (
        <header id={"header"}>
            <span className={"napisy"}>
                <Link to={"/"}>Domov</Link>
                <Link to={"/#omne"}>O mne</Link>
                <Link to={"/#projekty"}>Projekty</Link>
                <Link to={"/#kontakt"}>Kontakt</Link>
            </span>
            <span>
                <Smile id={"smile"}/>
            </span>
        </header>
    );
};

export default Header;
