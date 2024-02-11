import React, {useEffect, useState} from 'react';
import "../css/styles.css"
import "../css/popup.css"
import {useLocation, useNavigate} from "react-router-dom";

const Popup = () => {
    const [zobrazitPopup, setZobrazitPopup] = useState(false);

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const maSuhlas = localStorage.getItem("suhlas")

        if (location?.state?.popup === "hidden") {
            setZobrazitPopup(false)
        } else if (!maSuhlas) {
            setZobrazitPopup(true)
        }
    }, []);

    useEffect(() => {
        if (zobrazitPopup) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [zobrazitPopup]);


    const odsuhlasit = () => {
        localStorage.setItem("suhlas", "true")
        setZobrazitPopup(false)
    }


    return (
        zobrazitPopup && <div className={"popup"}>
            <div>
                <p>Používaním týchto stránok súhlasíte s
                    <span onClick={() => {
                        navigate("/disclaimer", {state: {popup: "hidden"}})
                    }}> vyhlásením o vylúčení zodpovednosti</span>
                </p>
            </div>
        </div>

    );

};

export default Popup;
