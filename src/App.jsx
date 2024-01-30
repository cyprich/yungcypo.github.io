import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer"
import PageNotFound from "./pages/PageNotFound";
import Updates from "./pages/Updates"

import Schodisko from "./pages/Schodisko";
import Odpisy from "./pages/Odpisy";
import ThreeD from "./pages/ThreeD";
import Piskvorky from "./pages/Piskvorky";
import KvadratickeRovnice from "./pages/KvadratickeRovnice";
import NalepkyNaFilament from "./pages/NalepkyNaFilament";

const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/updates"} element={<Updates/>}></Route>
                    <Route path={"/schodisko"} element={<Schodisko/>}/>
                    <Route path={"/odpisy"} element={<Odpisy/>}/>
                    <Route path={"/3D"} element={<ThreeD/>}/>
                    <Route path={"/3D/nalepkynafilament"} element={<NalepkyNaFilament/>}/>
                    <Route path={"/piskvorky"} element={<Piskvorky/>}/>
                    <Route path={"/kvadratickerovnice"} element={<KvadratickeRovnice/>}/>
                    <Route path={"*"} element={<PageNotFound/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
};

export default App;
