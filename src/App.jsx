import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={"*"} element={<p>404</p>}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;
