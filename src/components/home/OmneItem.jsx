import React from 'react';

const OmneItem = ({text, src}) => {
    return (
        <li className={"relative w-full"}>
            <div className={"p-8 text-center bg-gradient-to-tr from-red-400 to-red-600 rounded-2xl"}>
                <img className={"p-6 drop-shadow-2xl"} src={src} alt=""/>
                <p className={"font-bold text-2xl mt-2 drop-shadow-xl"}>{text}</p>
            </div>
        </li>
    );
};

export default OmneItem;