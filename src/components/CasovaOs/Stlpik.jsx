import React from 'react';

const Stlpik = ({id}) => {
    return (
        <div className={"grid grid-rows-[auto_1fr] gap-4 pt-4 w-max h-full"}>
            <div className={"flex justify-center items-center w-10 h-10 rounded-full bg-none border border-gray-300 text-gray-300 drop-shadow-xl"}>{id}</div>
            <div className={"w-[1px] h-full mx-auto mb-2 bg-gray-300 rounded-full"}></div>
        </div>
    );
};

export default Stlpik;