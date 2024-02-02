import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer"
import PageNotFound from "./pages/PageNotFound";
import Updates from "./pages/Updates"
import Kontakt from "./pages/Kontakt";

import Stavitelstvo from "./pages/Stavitelstvo";
import Schodisko from "./pages/Schodisko";
import Zatazenie from "./pages/Zatazenie";
import Vystuz from "./pages/Vystuz";
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
                    <Route path={"/kontakt"} element={<Kontakt className={"projekt"}/>}></Route>

                    <Route path={"/stavitelstvo"} element={<Stavitelstvo/>}></Route>
                    <Route path={"/schodisko"} element={<Schodisko/>}/>
                    <Route path={"/zatazenie"} element={<Zatazenie/>}/>
                    <Route path={"/vystuz"} element={<Vystuz/>}/>


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
