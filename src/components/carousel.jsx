import React, {useState} from 'react';
import {Link} from "react-router-dom";

import "../css/styles.css"
import "../css/projekty.css"

import projekty from "../constants/projekty";
import {ReactComponent as RadioChecked} from "../images/icons/radiochecked.svg";
import {ReactComponent as RadioUnchecked} from "../images/icons/radiounchecked.svg";

const Carousel = () => {
    

    return (
        <>
            <div className={"carousel"}>
                {projekty.map((projekt) => {
                    return (
                        <div className={"carousel-item"}>
                            <div className={"carousel-text"}>
                                <div>
                                    <h2 style={{color: "var(--color1)"}}>{projekt.title}</h2>
                                    <p>{projekt.description}</p>
                                </div>
                                <Link to={projekt.link}>
                                    <button>Zistiť viac</button>
                                </Link>
                            </div>
                            <div className="carousel-obrazok">
                                <img src={(projekt.background)} alt=""/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="bodky">

            </div>
        </>
    );
};


export default Carousel;
