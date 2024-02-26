import React from 'react';

import OmneItem from "./OmneItem";



const Omne = () => {
    return (
        <>
            <ul className={"relative grid grid-cols-3 mt-8 px-48 py-16 gap-16 bg-red-100"}>
                <svg className={"absolute top-[-2em] left-0 fill-red-100"} data-name="Layer 1"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 50">
                    <path
                        d="m0 0 37.08 2.78c36.94 2.78 111.53 8.33 185.14 7.41 74.03-.99 148.61-8.28 222.22-8.33 74.03.05 148.61 7.34 222.22 11.11 74.03 3.7 148.61 3.7 222.22 2.78 74.03-.99 148.61-2.73 222.22.92 74.03 3.65 148.61 13.02 222.22 11.11 74.03-1.91 148.61-14.76 222.22-21.3C1629.57 0 1704.15 0 1777.76.92c74.03.99 148.61 2.73 184.72 3.72l37.5.92V50H0V0Z"/>
                </svg>

                <OmneItem text={"Prievidza"} src={require("../../images/3dicons/house.png")}/>
                <OmneItem text={"4. 6. 2003"} src={require("../../images/3dicons/calendar.png")}/>
                <OmneItem text={"FRI UNIZA"} src={require("../../images/3dicons/computer.png")}/>
                <svg className={"absolute bottom-[-2em] fill-red-100"} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 2000 50">
                    <path
                        d="m0 11.29 37.08 3.76c36.94 3.83 111.53 11.24 185.14 17.89 74.03 6.58 148.61 12.23 222.22 15.05 74.03 2.82 148.61 2.82 222.22-.94 74.03-3.83 148.61-11.24 222.22-17.89 74.03-6.58 148.61-12.23 222.22-15.05 74.03-2.82 148.61-2.82 222.22 2.82 74.03 5.65 148.61 16.94 222.22 16 74.03-1.01 148.61-14.06 222.22-16.94 74.03-2.77 148.61 4.64 184.72 8.47l37.5 3.76V0H0v11.29Z"/>
                </svg>
            </ul>
        </>
    );
};

export default Omne;
