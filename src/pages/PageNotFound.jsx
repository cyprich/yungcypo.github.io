import React from 'react';
import "../css/styles.css"
import "../css/404.css"
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className={"pagenotfound projekt"}>
            <h1>404</h1>
            <h4>Takúto stránku zatiaľ nemám, alebo je momentálne nedostupná</h4>
            <h4>Ak problém pretrváva, <span style={{textDecoration: "underline"}}>kontaktuj ma</span></h4>
            <Link to={"/"}><h4 className={"pagenotfoundlink"}>Choď domov</h4></Link>
        </div>
    );
};

export default PageNotFound;
