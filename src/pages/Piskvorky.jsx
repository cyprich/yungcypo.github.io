import React, {useEffect} from 'react';

const Piskvorky = () => {

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | Piškvorky"
    }, []);

    return (
        <div className={"piskvorky projekt"} style={{padding: "2em"}}>
            <div className="piskvorkynadpisy" style={{paddingBottom: "1em"}}>
                <h2>Piškvorky</h2>
                <h4><i>*under construction*</i></h4>
            </div>
            <p>Na tejto stránke sa momentálne pracuje</p>
            <p>Ďakujem na pochopenie :)</p>
        </div>
    );
};

export default Piskvorky;
