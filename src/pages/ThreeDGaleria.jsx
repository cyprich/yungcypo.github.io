import React from 'react';
import "../css/styles.css"
import "../css/threed.css"

import SpatNa from "../components/SpatNa";

const ThreeDGaleria = () => {
    // https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
    function importAll(r) {
        return r.keys().map(r);
    }

    const obrazky = importAll(require.context('../images/3Dgaleria', false, /\.(png|jpg|svg)$/));

    console.log(obrazky)

    return (
        <>
            <div className={"threedgaleria"}>
                <div className="threedgalerianadpisy">
                    <h2>Galéria</h2>
                    <h4>Obrázky výtlačkov</h4>
                </div>
                <div>
                    {
                        obrazky.map((e) => {
                            return (
                                <>
                                    <img src={e} alt="" width={1/6 * 100 + "%"}/>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <SpatNa text={"3D tlač"} link={"/3D"}/>
        </>
    );
};

export default ThreeDGaleria;
