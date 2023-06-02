import React from "react";
import "./ShopItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

export default function ShopItem({ imgsrc, title, description }) {
    return (
        <div className="shop-item-container">
            <div className="shop-item-img">
                <img src={imgsrc} alt="alt" />
            </div>
            <div className="shop-item-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="shop-item-icon">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faComment} />
            </div>
        </div>
    );
}
