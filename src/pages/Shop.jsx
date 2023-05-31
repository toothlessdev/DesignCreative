import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass, faCartShopping, faHouse, faShirt, faGem, faPenRuler, faChair, faEllipsis } from "@fortawesome/free-solid-svg-icons";

import ShopItem from "../components/ShopItem";

import "./Shop.css";

import { usedItems } from "../assets/usedItems";
import { upcycleItems } from "../assets/upcycleItems";

export default function Shop() {
    const [shopType, setShopType] = useState(true);

    function onType1Handler() {
        console.log("click1");
        setShopType(true);
    }
    function onType2Handler() {
        console.log("click2");
        setShopType(false);
    }

    function Nav() {
        useEffect(() => {
            document.getElementById("shop-type-1").addEventListener("click", onType1Handler);
            document.getElementById("shop-type-2").addEventListener("click", onType2Handler);

            return () => {
                // document.getElementById("shop-type-1").removeEventListener("click", onType1Handler);
                // document.getElementById("shop-type-1").removeEventListener("click", onType2Handler);
            };
        }, []);

        return (
            <>
                <div className="top-nav-wrapper">
                    <ul className="top-nav-container">
                        <li className="top-nav-item" style={{ flexGrow: "1" }}>
                            <FontAwesomeIcon icon={faBell} />
                        </li>

                        <li className="top-nav-item" style={{ flexGrow: "5" }}>
                            <h3 id="shop-type-1" style={shopType ? { color: "black" } : { color: "gray" }}>
                                중고거래
                            </h3>
                            <h3 id="shop-type-2" style={!shopType ? { color: "black" } : { color: "gray" }}>
                                업사이클
                            </h3>
                        </li>

                        <li className="top-nav-item" style={{ flexGrow: "1" }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <FontAwesomeIcon icon={faCartShopping} />
                        </li>
                    </ul>
                </div>

                <p style={{ marginTop: "80px" }}></p>
            </>
        );
    }

    function Category() {
        return (
            <div className="category-wrapper">
                <div className="category-container">
                    <div className="category-item">
                        <FontAwesomeIcon icon={faHouse} />
                        <p>생활</p>
                    </div>
                    <div className="category-item">
                        <FontAwesomeIcon icon={faShirt} />
                        <p>의류</p>
                    </div>
                    <div className="category-item">
                        <FontAwesomeIcon icon={faGem} />
                        <p>악세서리</p>
                    </div>
                    <div className="category-item">
                        <FontAwesomeIcon icon={faPenRuler} />
                        <p>잡화</p>
                    </div>
                    <div className="category-item">
                        <FontAwesomeIcon icon={faChair} />
                        <p> 소품</p>
                    </div>
                    <div className="category-item">
                        <FontAwesomeIcon icon={faEllipsis} />
                        <p>기타</p>
                    </div>
                </div>
            </div>
        );
    }

    // 중고상품
    if (shopType) {
        return (
            <>
                <Nav></Nav>
                {usedItems.map((element, index) => {
                    return <ShopItem key={index} title={element.title} description={element.description}></ShopItem>;
                })}
            </>
        );
    }
    //
    else {
        return (
            <>
                <Nav></Nav>
                <Category></Category>
                {upcycleItems.map((element, index) => {
                    return <ShopItem key={index} title={element.title} description={element.description}></ShopItem>;
                })}
            </>
        );
    }
}
