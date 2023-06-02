import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/NavBar";
import Loading from "./pages/Loading";

import Home from "./pages/Home";
import Find from "./pages/Find";
import Map from "./pages/Map";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar></NavBar>

                <Routes>
                    <Route path="/*" element={<Home></Home>}></Route>
                    <Route path="/loading" element={<Loading></Loading>}></Route>

                    <Route path="/find" element={<Find></Find>}></Route>
                    <Route path="/map" element={<Map></Map>}></Route>
                    <Route path="/shop" element={<Shop></Shop>}></Route>
                    <Route path="/profile" element={<Profile></Profile>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
