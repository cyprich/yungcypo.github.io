import React from 'react';
import {Link} from "react-router-dom";
import "../css/styles.css";
import "../css/header.css";


const Header = () => {
    return (
        <header>
            <span>
                <Link to={"/"}>Domov</Link>
                <Link to={"/#omne"}>O mne</Link>
                <Link to={"/#projekty"}>Projekty</Link>
                <Link to={"/#kontakt"}>Kontakt</Link>
            </span>
            <span>
                <img id={"smile"} src={"/src/images/smile.svg"} height={"50%"} width={"auto"}  alt={""}/>
            </span>
        </header>
    );
};

export default Header;
