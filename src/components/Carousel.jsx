import React, {useState} from 'react';
import {Link} from "react-router-dom";

import "../css/styles.css"
import "../css/projekty.css"

import projekty from "../constants/projekty";
import {ReactComponent as ArrowForward} from "../images/icons/arrowforward.svg";
import {ReactComponent as ArrowBack} from "../images/icons/arrowback.svg";
import {ReactComponent as RadioChecked} from "../images/icons/radiochecked.svg";
import {ReactComponent as RadioUnchecked} from "../images/icons/radiounchecked.svg";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = projekty.length - 1;
        } else if (newIndex >= projekty.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    return (
        <div className={"carousel"}>
            <div className="carousel-items">
                {projekty.map((projekt, key) => {
                    return (
                        <div className={"carousel-item"} style={{transform: `translate(-${activeIndex * 100}vw)`}}
                             key={key}>
                            <div className={"carousel-description"}>
                                <div>
                                    <h2 style={{color: "var(--color1)"}}>{projekt.title}</h2>
                                    <p>{projekt.description}</p>
                                </div>
                                <Link to={projekt.link}>
                                    <button style={{color: "var(--color1)", borderColor: "var(--color1)"}}>
                                        <p>Zistiť viac</p>
                                    </button>
                                </Link>
                            </div>
                            <div className="carousel-image">
                                <img src={(projekt.background)} alt=""/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="carousel-navigation">
                <button onClick={() => {
                    updateIndex(activeIndex - 1)
                }}>
                    <ArrowBack/>
                </button>
                <div className="carousel-bodky">
                    {projekty.map((projekt, index) => {
                        return (

                            <button onClick={() => {
                                updateIndex(index)
                            }} key={index}>
                                {
                                    index === activeIndex
                                        ? <RadioChecked/>
                                        : <RadioUnchecked/>
                                }
                            </button>
                        )
                    })}
                </div>
                <button onClick={() => {
                    updateIndex(activeIndex + 1)
                }}>
                    <ArrowForward/>
                </button>
            </div>
        </div>
    );
};


export default Carousel;
