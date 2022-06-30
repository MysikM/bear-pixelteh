import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Bears from "../pages/Bears/Bears";
import Header from "../components/Header/Header";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to='/bears' />} />
                <Route path="/bears" element={<Bears />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;