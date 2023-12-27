import React from 'react';
import "../css/styles.css"
import "../css/footer.css"

const Footer = () => {
    return (
        <footer>
            <div>
                <p className={"light"}>Cypo's Website <span className={"lighter"}>v3</span></p>
                <p className={"light"}>Created by Cypo</p>
            </div>
            <div>
                <p className={"light"}>Zdrojový kód je sprístupnený na
                    <a href="https://github.com/yungcypo/Website" target={"_blank"}> Github</a>
                </p>
                <p className={"light"}>2020 - 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
