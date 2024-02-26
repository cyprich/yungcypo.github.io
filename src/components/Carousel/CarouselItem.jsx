import React from 'react';


const CarouselItem = ({title, description, image, icon, link}) => {
    return (
        <div className={"flex justify-between items-center w-full h-full px-16"}>
            <div>
                <h2 className={"font-bold text-4xl"}>TEXT</h2>
                <p></p>
            </div>
            <img className={"w-1/3 h-auto"} src={require("../../images/background.webp")} alt=""/>
        </div>
    );
};

export default CarouselItem;