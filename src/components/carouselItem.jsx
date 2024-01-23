import React from 'react';
import "../css/styles.css"
import "../css/projekty.css"

const CarouselItem = ({item}) => {
    return (
        <div className={"carouselItem"}>
            <div></div>
            <img src={item.icon.default} alt="" className="carouselImage"/>
            <div className="carouselItemText">
                {item.description}
            </div>
        </div>
    );
};

export default CarouselItem;
