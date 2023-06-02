import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import "./Find.css";

export default function Find() {
    useEffect(() => {}, []);

    return (
        <div className="camera-wrapper">
            <div className="camera-wrapper">
                <div className="test-image"></div>
            </div>
            <div className="camera-overlay">
                <FontAwesomeIcon icon={faExpand} beat />
                <p>화면의 Focus 부분에</p>
                <p>쓰레기통이 들어가게 촬영해주세요</p>
            </div>
        </div>
    );
}
