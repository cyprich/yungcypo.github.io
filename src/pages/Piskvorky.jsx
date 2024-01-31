import React, {useEffect} from 'react';
import "../css/styles.css"
import "../css/piskvorky.css"

const Piskvorky = () => {

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className={"piskvorky projekt"}>

        </div>
    );
};

export default Piskvorky;
