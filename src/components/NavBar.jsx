import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faLocationDot, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("menu-1").addEventListener("click", (e) => {
            navigate("/find");
            e.stopPropagation();
        });
        document.getElementById("menu-2").addEventListener("click", (e) => {
            navigate("/map");
            e.stopPropagation();
        });
        document.getElementById("menu-3").addEventListener("click", (e) => {
            navigate("/shop");
            e.stopPropagation();
        });
        document.getElementById("menu-4").addEventListener("click", (e) => {
            navigate("/profile");
            e.stopPropagation();
        });

        return () => {};
    }, []);

    return (
        <nav className="nav-wrapper">
            <div className="nav-container">
                <div className="nav-item" id="menu-1">
                    <FontAwesomeIcon icon={faTrash} />
                    <p>여기있쓰</p>
                </div>
                <div className="nav-item" id="menu-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>어디있쓰</p>
                </div>
                <div className="nav-item" id="menu-3">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p>살거있쓰</p>
                </div>
                <div className="nav-item" id="menu-4">
                    <FontAwesomeIcon icon={faUser} />
                    <p>내프로필</p>
                </div>
            </div>
        </nav>
    );
}
