import React from 'react';
import {Link} from "react-router-dom";
import "/src/css/styles.css";
import "/src/css/header.css";

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
                <img id={"smile"} src="/src/images/smile.svg" alt=""/>
            </span>
        </header>
    );
};

export default Header;
