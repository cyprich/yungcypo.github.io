import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route />
                    <Route path="*" element={<PageNotFound />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
