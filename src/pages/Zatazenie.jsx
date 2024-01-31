import React, {useEffect, useState} from 'react';
import "../css/styles.css"
import "../css/zatazenie.css"

const Zatazenie = () => {
    const [strecha, setStrecha] = useState(false);

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"zatazenie projekt"}>
            <div className={"zatazenienadpisy"}>
                <h2>Zaťaženie</h2>
                <h4>Výpočet zaťaženia na stop alebo strechu</h4>
            </div>
        </div>
    );
};

export default Zatazenie;
