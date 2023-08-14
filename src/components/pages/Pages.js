import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Posts from "./Posts";
import Navbar from "../Common/Navbar";
import Single from "./single";
import Login from "./Login";
import AddPost from "./AddPost";

const Pages = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/posts" element={<Posts />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/posts/:id" element={<Single />}/>
                <Route path="/add-post" element={<AddPost />}/>

            </Routes>
        </>
    )
}

export default Pages;