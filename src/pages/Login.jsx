import React from 'react';
import "../css/styles.css"
import "../css/login.css"

import {ReactComponent as GoogleLogo} from "../images/icons/socials/google_color.svg"

const Login = () => {
    return (
        <div className={"login projekt"}>
            <div className={"logincontent"}>
                <h3>Prihlásiť sa</h3>
                <hr/>
                <div>

                    <div className={"logininputy"}>
                        <input type="text" placeholder={"E-mail"} disabled={true} title={"Momentálne nedostupné"}/>
                        <input type="password" placeholder={"Heslo"} disabled={true} title={"Momentálne nedostupné"}/>
                    </div>
                    <button>
                        <GoogleLogo/>
                        <p>Pokračovať s Google účtom</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
