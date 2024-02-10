import React, {useEffect} from 'react';
import "../css/styles.css"
import "../css/pagenotfound.css"
import {Link} from "react-router-dom";

const PageNotFound = () => {

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | 404"
    }, []);

    return (
        <div className={"pagenotfound projekt"}>
            <h1>404</h1>
            <h3>Stránka sa nenašla</h3>
            <p>Takúto stránku zatiaľ nemám, alebo je momentálne nedostupná</p>
            <p>Ak problém pretrváva, <Link to={"/kontakt"} className={"pagenotfoundlink"}>kontaktuj ma</Link></p>
            <p className={"pagenotfoundlink vyrazne"} style={{width: "max-content", paddingTop: "0.5em"}}><Link to={"/"}>Choď domov</Link></p>
        </div>
    );
};

export default PageNotFound;
