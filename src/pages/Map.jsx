import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { GetQuery, regions } from "../utils/ApiQuery";
import { DATA_ADDRESS_KEY, DATA_API_KEY, DATA_BASE_URL, KAKAO_API_KEY } from "../utils/apiKey";

import Loading from "./Loading";

export default function Map() {
    let map;
    const mapScript = document.createElement("script");
    const [isLoading, setIsLoading] = useState(true);

    function SetMarker(latitude, longitude) {
        const imgSrc = "https://cdn-icons-png.flaticon.com/512/3791/3791550.png";
        const imgSize = new window.kakao.maps.Size(30, 30);
        const imgOption = { offset: new window.kakao.maps.Point(27, 69) };

        const markerImage = new window.kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

        const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
        });

        marker.setMap(map);
    }

    function onLoadKakaoMap() {
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const mapOption = {
                center: new window.kakao.maps.LatLng("35.865496", "128.593436"), // 지도의 중심좌표
                level: 8, // 지도의 확대 레벨
            };
            map = new window.kakao.maps.Map(mapContainer, mapOption);
            console.log("Kakao MAP API Loaded.");
        });

        GetTrashBinPositions(1, 100);
    }

    async function GetTrashBinPositions(page, perpage, callback) {
        // 공공데이터 포털로부터 쓰레기통 위치 Request

        for (const region of regions) {
            console.log(region);
            const BASE_URL = `https://api.odcloud.kr/api/${DATA_BASE_URL[region]}/v1/`;
            const API_KEY = DATA_API_KEY[region];
            const query = GetQuery(region, 1, 1000);

            await axios
                .get(BASE_URL + query)
                .then((response) => {
                    console.log(`GET Request Success! in ${region}`);
                    for (let index = 0; index < response.data.matchCount; index++) {
                        // 해당 지번주소에 해당하는 좌표값 계산
                        const geocoder = new window.kakao.maps.services.Geocoder();
                        geocoder.addressSearch(response.data.data[index][DATA_ADDRESS_KEY[region]], (result, status) => {
                            if (status === window.kakao.maps.services.Status.OK) {
                                console.log(`(${result[0]["y"]}, ${result[0]["x"]})`);
                                SetMarker(result[0]["y"], result[0]["x"]);
                            }
                        });
                    }
                    setIsLoading(false);
                })
                .catch(() => {
                    console.log(`GET Request Failed! in ${region}`);
                    setIsLoading(false);
                });
        }
    }

    useEffect(() => {
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false&libraries=services`;
        document.head.appendChild(mapScript);
        mapScript.addEventListener("load", onLoadKakaoMap);
    }, []);

    // render
    // if (isLoading) {
    //     return <Loading></Loading>;
    // } else {
    return (
        <>
            <div id="map">{isLoading ? <Loading></Loading> : null}</div>
        </>
    );
    // }
}
