import React from 'react';

const Header = () => {
    return (
        <nav className={"flex justify-between items-center h-16 px-8 w-full bg-black fixed top-0 left-0 z-50 text-gray-50 "}>
            <ul className={"flex gap-12 select-none cursor-pointer"}>
                <li className={"hover:text-red-900"}>Domov</li>
                <li className={"hover:text-red-900"}>Projekty</li>
                <li className={"hover:text-red-900"}>Kontakt</li>
            </ul>
            <img className={"w-10 h-10"} src={require("../images/icons/smile.png")} alt=""/>
        </nav>
    );
};

export default Header;