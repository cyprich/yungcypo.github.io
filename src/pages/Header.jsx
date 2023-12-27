import React from 'react';
import {Link} from "react-router-dom";
import "../css/styles.css";
import "../css/header.css";
import smile from "../images/smile.png"


const Header = () => {

    return (
        <header>
            <span className={"napisy"}>
                <Link to={"/"}>Domov</Link>
                <Link to={"/#omne"}>O mne</Link>
                <Link to={"/#projekty"}>Projekty</Link>
                <Link to={"/#kontakt"}>Kontakt</Link>
            </span>
            <span >
                <img src={smile} alt="" className={"obrazok"}/>
            </span>
        </header>
    );
};

export default Header;
