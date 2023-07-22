import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Posts from "./Posts";
import Navbar from "../Common/Navbar";
import Single from "./single";

const Pages = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/posts" element={<Posts />}/>
                <Route path="/posts/:id" element={<Single />}/>

            </Routes>
        </>
    )
}

export default Pages;