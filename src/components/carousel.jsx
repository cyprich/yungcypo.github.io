import React from 'react';
import {useState} from "react";
import CarouselItem from "./carouselItem";
import items from "../constants/projekty";

import "../css/styles.css"
import "../css/projekty.css"

import {ReactComponent as RadioChecked} from "../images/icons/radiochecked.svg";
import {ReactComponent as RadioUnchecked} from "../images/icons/radiounchecked.svg";
import {ReactComponent as ArrowForward} from "../images/icons/arrowforward.svg";
import {ReactComponent as ArrowBack} from "../images/icons/arrowback.svg";


const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className={"carousel"}>
            <div className="inner" style={{transform: `translate:(-${activeIndex * 100})`}}>
                {items.map((item) => {
                    return <CarouselItem item={item}/>
                })}
            </div>
            <div className="carouselButtons">
                <button className={"buttonArrow"}>
                    <ArrowBack/>
                </button>
                <div className="indicators">
                    {items.map((item) => {
                        return (<button>
                            {item.id === activeIndex ? <RadioChecked/> : <RadioUnchecked/>}
                        </button>)
                    })}
                </div>
                <button className={"buttonArrow"}>
                    <ArrowForward/>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
