import React from 'react';
import "../css/styles.css"
import "../css/footer.css"

const Footer = () => {
    return (
        <footer id={"footer"}>
            <div>
                <p>Cypo's Website <span style={{color: 'var(--color7)'}}>v3</span></p>
                <p>Created by Cypo</p>
            </div>
            <div>
                <p>Zdrojový kód je sprístupnený na
                    <a href="https://github.com/yungcypo/Website" target={"_blank"}> Github</a>
                </p>
                <p>2020 - 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
