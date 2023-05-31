import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./Profile.css";

export default function Profile() {
    function Nav() {
        return (
            <>
                <div className="top-nav-wrapper">
                    <ul className="top-nav-container">
                        <li className="top-nav-item" style={{ flexGrow: "1" }}></li>

                        <li className="top-nav-item" style={{ flexGrow: "5" }}>
                            <h3>내 프로필</h3>
                        </li>

                        <li className="top-nav-item" style={{ flexGrow: "1" }}>
                            <FontAwesomeIcon icon={faGear} />
                        </li>
                    </ul>
                </div>
                <p style={{ marginTop: "80px" }}></p>
            </>
        );
    }

    function ProfileMenu({ menuName }) {
        return (
            <div className="profile-menu-container">
                <h4>{menuName}</h4>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        );
    }

    return (
        <>
            <Nav></Nav>

            <div className="profile-wrapper">
                <div className="profile-container">
                    <img
                        className="profile-img"
                        src="data:image/jpeg;base64,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"
                    ></img>
                    <div className="profile-description">
                        <p className="profile-rating">플래티넘 등급</p>
                        <h2 className="profile-name">홍길동</h2>
                        <h4>내포인트 {"100점"}</h4>
                    </div>
                </div>
            </div>

            <ProfileMenu menuName="우리동네 쓰레기통 변경"></ProfileMenu>
            <ProfileMenu menuName="포인트 적립내역"></ProfileMenu>
            <ProfileMenu menuName="포인트 사용내역"></ProfileMenu>
            <ProfileMenu menuName="수거함 추가 설치 요청"></ProfileMenu>
            <ProfileMenu menuName="1:1 문의"></ProfileMenu>
        </>
    );
}
