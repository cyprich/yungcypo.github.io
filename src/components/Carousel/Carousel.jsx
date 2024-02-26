import React from 'react';

import CarouselItem from "./CarouselItem";

const Carousel = ({subor}) => {
    return (
        <>
            <div className="flex flex-col items-center gap-4 w-full bg-red-800 pt-4 text-gray-950">
                <p className={"font-bold text-3xl text-gray-800"}>Projekty</p>
                <div className={"w-full h-96 mb-8 overflow-hidden"}>
                    {
                        subor.map((hodnoty, key) => {
                            return (
                                <CarouselItem {...hodnoty} key={key}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Carousel;