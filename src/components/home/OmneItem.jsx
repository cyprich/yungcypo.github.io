import React from 'react';

const OmneItem = ({text, src}) => {
    return (
        <div className={"bg-red-100 p-8 w-full rounded-2xl text-center"}>
            <img src={src} alt=""/>
            <p className={"font-bold text-xl"}>{text}</p>
        </div>
    );
};

export default OmneItem;