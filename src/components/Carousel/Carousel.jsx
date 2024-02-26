import React from 'react';

import CarouselItem from "./CarouselItem";

const Carousel = ({subor}) => {
    return (
        <div>
            {

                subor.map((hodnoty, key) => {
                    return (
                        <CarouselItem {...hodnoty} key={key}/>
                    )
                })
            }
        </div>
    );
};

export default Carousel;