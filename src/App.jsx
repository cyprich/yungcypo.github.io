import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <div className={"h-16 bg-red-50"}></div>
                <main className={"overflow-hidden text-gray-50"}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>

                        <Route path={"*"} element={<p>404</p>}/>
                    </Routes>
                </main>
                <Footer/>
            </Router>
        </>
    );
};

export default App;
