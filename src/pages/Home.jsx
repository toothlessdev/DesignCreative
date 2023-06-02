import React, { useEffect } from "react";
import wallpaper from "../assets/wallpaper.png";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const overlayAnimation = setTimeout(() => {
            document.querySelector(".home-img-overlay").style.opacity = 0.5;
            document.querySelector(".home-img-overlay-text").style.opacity = 1;
            document.querySelector(".home-img-overlay-text").style.transform = "translateY(0px)";
        });

        return () => {
            clearTimeout(overlayAnimation);
        };
    }, []);

    return (
        <div className="home-wrapper">
            <img className="home-img-wrapper" src={wallpaper} alt="" />
            <div className="home-img-overlay"></div>
            <div className="home-img-overlay-text">
                <h1>어디있쓰</h1>
                <p>주변 쓰레기통 위치를 찾아 분리배출하고</p>
                <p>포인트를 적립하세요</p>
                <button
                    className="btn-start"
                    onClick={() => {
                        navigate("/map");
                    }}
                >
                    시작하기
                </button>
            </div>
        </div>
    );
}
