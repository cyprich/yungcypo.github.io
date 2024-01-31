import React, {useEffect} from 'react';
import "../css/styles.css"
import "../css/pagenotfound.css"
import {Link} from "react-router-dom";

const PageNotFound = () => {

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"pagenotfound projekt"}>
            <h1>404</h1>
            <p>Takúto stránku zatiaľ nemám, alebo je momentálne nedostupná</p>
            <p>Ak problém pretrváva, <span style={{textDecoration: "underline"}}>kontaktuj ma</span></p>
            <Link to={"/"}><p className={"pagenotfoundlink"}>Choď domov</p></Link>
        </div>
    );
};

export default PageNotFound;
