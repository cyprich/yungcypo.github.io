import React, {useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";

import "../css-old/styles.css"
import "../css-old/projekty.css"

import projekty from "../constants/projekty";
import {ReactComponent as ArrowForward} from "../images/icons/arrowforward.svg";
import {ReactComponent as ArrowBack} from "../images/icons/arrowback.svg";
import {ReactComponent as RadioChecked} from "../images/icons/radiochecked.svg";
import {ReactComponent as RadioUnchecked} from "../images/icons/radiounchecked.svg";
import background from "../images/background.webp";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselref = useRef(null);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = projekty.length - 1;
        } else if (newIndex >= projekty.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
        carouselref.current.scrollIntoView()
    }

    return (
        <div className={"carousel"} ref={carouselref}>
            <div className="carousel-items">
                {projekty.map((projekt, key) => {
                    return (
                        <>
                            {/* zobrazenie na pc */}
                            <div className={"carousel-item nophone"}
                                 style={{transform: `translate(-${activeIndex * 100}vw)`}}
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
                            {/* zobrazenie na mobile */}
                            <div className={"carousel-item phone"}
                                 style={{
                                     transform: `translate(-${activeIndex * 100}vw)`,
                                 }}
                                 key={key + 10}>
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
                        </>
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
