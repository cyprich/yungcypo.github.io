import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer"
import FooterPhone from "./components/FooterPhone";
import PageNotFound from "./pages/PageNotFound";
import Updates from "./pages/Updates"
import Kontakt from "./components/Kontakt";
import Disclaimer from "./pages/Disclaimer";
import Popup from "./pages/Popup";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

import Stavitelstvo from "./pages/Stavitelstvo";
import Schodisko from "./pages/Schodisko";
import Zatazenie from "./pages/Zatazenie";
import Vystuz from "./pages/Vystuz";

import ThreeD from "./pages/ThreeD";
import ThreeDHistoria from "./pages/ThreeDHistoria";
import ThreeDKalkulacka from "./pages/ThreeDKalkulacka";
import ThreeDModely from "./pages/ThreeDModely";
import ThreeDFilamenty from "./pages/ThreeDFilamenty";
import ThreeDFilamentyNovy from "./pages/ThreedFilamentyNovy";
import ThreedPrusameter from "./pages/ThreedPrusameter";

import Odpisy from "./pages/Odpisy";
import Piskvorky from "./pages/Piskvorky";
import KvadratickeRovnice from "./pages/KvadratickeRovnice";
import NalepkyNaFilament from "./pages/NalepkyNaFilament";


const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <Popup/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/updates"} element={<Updates/>}></Route>
                    <Route path={"/kontakt"} element={<Kontakt className={"projekt"}/>}></Route>
                    <Route path={"/disclaimer"} element={<Disclaimer/>}></Route>
                    <Route path={"/vyhlasenieovylucenizodpovednosti"} element={<Disclaimer/>}></Route>
                    <Route path={"/login"} element={<Login/>}></Route>
                    <Route path={"/prihlasenie"} element={<Login/>}></Route>
                    <Route path={"/signin"} element={<Signin/>}></Route>
                    <Route path={"/registracia"} element={<Signin/>}></Route>

                    <Route path={"/stavitelstvo"} element={<Stavitelstvo/>}></Route>
                    <Route path={"/schodisko"} element={<Schodisko/>}/>
                    <Route path={"/zatazenie"} element={<Zatazenie/>}/>
                    <Route path={"/vystuz"} element={<Vystuz/>}/>

                    <Route path={"/3D"} element={<ThreeD/>}/>
                    <Route path={"/3D/historia"} element={<ThreeDHistoria/>}/>
                    <Route path={"/3D/kalkulacka"} element={<ThreeDKalkulacka/>}/>
                    <Route path={"/3D/modely"} element={<ThreeDModely/>}/>
                    <Route path={"/3D/filamenty"} element={<ThreeDFilamenty/>}/>
                    <Route path={"/3D/filamenty/novy"} element={<ThreeDFilamentyNovy/>}/>
                    <Route path={"/3D/prusameter"} element={<ThreedPrusameter/>}/>
                    <Route path={"/3D/nalepkynafilament"} element={<NalepkyNaFilament/>}/>

                    <Route path={"/odpisy"} element={<Odpisy/>}/>
                    <Route path={"/piskvorky"} element={<Piskvorky/>}/>
                    <Route path={"/kvadratickerovnice"} element={<KvadratickeRovnice/>}/>

                    <Route path={"*"} element={<PageNotFound/>}/>
                </Routes>
                <Footer/>
                <FooterPhone/>
            </Router>
        </>
    );
};

export default App;
