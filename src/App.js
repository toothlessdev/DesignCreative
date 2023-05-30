import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

import Map from "./components/Map";

function App() {
    return (
        <div className="App">
            <Map></Map>
        </div>
    );
}

export default App;
