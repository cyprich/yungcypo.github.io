import React from 'react';
import {auth, provider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"

import {ReactComponent as GoogleLogo} from "../images/icons/socials/google_color.svg"
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        navigate("/")
    }

    return (
        <div className={"login projekt"}>
            <div className={"logincontent"}>
                <h3>Prihlásiť sa</h3>
                <hr/>
                <div>
                    {
                    /*
                    <div className={"logininputy"}>
                        <input type="text" placeholder={"E-mail"} disabled={true} title={"Momentálne nedostupné"}/>
                        <input type="password" placeholder={"Heslo"} disabled={true} title={"Momentálne nedostupné"}/>
                    </div>
                    */
                    }
                    <button onClick={signInWithGoogle}>
                        <GoogleLogo/>
                        <p>Pokračovať s Google účtom</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
