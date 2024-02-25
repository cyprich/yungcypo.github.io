import React, {useState} from 'react';
import "../css-old/styles.css"
import "../css-old/profil.css"
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../config/firebase";
import {useNavigate} from "react-router-dom";

const Profil = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    return (
        <div className={"profil projekt"}>
            {
                auth?.currentUser
                    ? <div className={"siprihlaseny"}>
                        <div>
                            <img src={user?.photoURL} alt=""/>
                            <div>
                                <h2>{user?.displayName}</h2>
                                <h4>{user?.email}</h4>
                            </div>
                        </div>
                    </div>
                    : <div className={"niesiprihlaseny"}>
                        <div>
                            <div style={{marginBottom: "1.5em"}}>
                                <h2>Tvoj Profil</h2>
                                <p className={"nevyrazne"}>Nie si prihlásený</p>
                            </div>

                            <button onClick={() => {
                                navigate("/login")
                            }}>Prihlásiť sa
                            </button>
                        </div>
                    </div>
            }


        </div>
    );
};

export default Profil;
