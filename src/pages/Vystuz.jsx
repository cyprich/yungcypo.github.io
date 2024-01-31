import React, {useEffect} from 'react';
import "../css/styles.css"
import "../css/vystuz.css"

const Vystuz = () => {

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"projekt vystuz"}>
            <h2>Výstuž</h2>
            <h4>Návrh výstuže do jednoduchej dosky</h4>
        </div>
    );
};

export default Vystuz;
