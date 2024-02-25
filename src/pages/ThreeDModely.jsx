import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import threed from "../constants/threed";

import SpatNa from "../components/SpatNa";
import ImageLoader from "../components/ImageLoader";

const ThreeDModely = () => {
    const navigate = useNavigate()

    const [hoveredModelLink, setHoveredModelLink] = useState(null);
    const handle3DModelMouseEnter = (e) => {
        setHoveredModelLink(e)
    }
    const handle3DModelMouseLeave = () => {
        setHoveredModelLink(null)
    }

    /* scroll to top */
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Cypo | 3D | Modely"
    }, []);

    return (
        <>

            <div className={"threedmodely"}>
                <div className="threedmodelynadpisy">
                    <h2>Moje modely</h2>
                    <h4>Modely, ktoré som sám vytvoril</h4>
                    <p className={"nevyrazne"}>Každý like a stiahnutie modelu mi pomáha v rozvoji 3D tlače
                        <span className={"threedpomoc"} onClick={() => {navigate("/3D/prusameter")}}>?</span>
                    </p>
                </div>
                <div className="threedmodelymodely">
                    {
                        threed.modely.map((e, key) => {
                            return (
                                <div className="threedmodel" key={key}>
                                    <Link to={e.linky.printables} target={"_blank"}>
                                        <ImageLoader
                                            src={e.obrazok}
                                            style={{
                                                width: "100%",
                                                borderRadius: "16px 16px 0 0"
                                            }}
                                        />
                                    </Link>
                                    <div className="threedmodelpismenka">
                                        <h5>{e.nazov}</h5>
                                        <div>
                                            <img
                                                src={require("../images/icons/calculator.png")}
                                                alt=""
                                                style={{
                                                    filter: "invert(1)"
                                                }}
                                                onClick={() => {
                                                    navigate("/3D/kalkulacka?model=" + e.id)
                                                }}
                                            />

                                            {
                                                e.linky.printables
                                                    ? <Link to={e.linky.printables} target={"_blank"}>
                                                        <img
                                                            src={
                                                                hoveredModelLink == e.nazov + "printables"
                                                                    ? require("../images/icons/socials/printables_color.png")
                                                                    : require("../images/icons/socials/printables_white.png")
                                                            }
                                                            alt=""
                                                            title={"Stiahnuť na Printables"}
                                                            onMouseEnter={() => {
                                                                handle3DModelMouseEnter(e.nazov + "printables")
                                                            }}
                                                            onMouseLeave={() => {
                                                                handle3DModelMouseLeave()
                                                            }}
                                                        />
                                                    </Link>
                                                    : null
                                            }
                                            {
                                                e.linky.makerworld
                                                    ? <Link to={e.linky.makerworld} target={"_blank"}>
                                                        <img
                                                            src={
                                                                hoveredModelLink == e.nazov + "makerworld"
                                                                    ? require("../images/icons/socials/makerworld_color.png")
                                                                    : require("../images/icons/socials/makerworld_white.png")
                                                            }
                                                            alt=""
                                                            title={"Stiahnuť na MakerWorld"}
                                                            onMouseEnter={() => {
                                                                handle3DModelMouseEnter(e.nazov + "makerworld")
                                                            }}
                                                            onMouseLeave={() => {
                                                                handle3DModelMouseLeave()
                                                            }}
                                                        />
                                                    </Link>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="threedmodelyafterbutton">
                    <Link to={"https://www.printables.com/@cypo/models"} target={"_blank"}>
                        <button>
                            <h5>Všetky modely na Printables</h5>
                            <img src={require("../images/icons/socials/printables_color.png")} alt=""/>
                        </button>
                    </Link>
                </div>
            </div>
            <SpatNa text={"3D tlač"} link={"/3D"}/>
        </>
    )
        ;
};

export default ThreeDModely;
