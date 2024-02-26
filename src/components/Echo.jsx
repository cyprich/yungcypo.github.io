import React from 'react';

const Echo = ({text}) => {
    return (
        <>
            <p className={"font-bold text-4xl text-center"}>{text}</p>
            <p className={"font-normal text-4xl text-center text-gray-500"}>{text}</p>
            <p className={"font-light text-4xl text-center text-gray-800"}>{text}</p>
        </>
    );
};

export default Echo;