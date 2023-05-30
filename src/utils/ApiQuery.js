import { DATA_API_KEY } from "./apiKey";

export const regions = ["북구", "달서구", "서구", "달성군"];
export const GetQuery = (region, page, perpage) => {
    switch (region) {
        case "북구":
            return `uddi:b567f95c-7810-4bab-8f14-d0109ccc492b?page=${page}&perPage=${perpage}&serviceKey=${DATA_API_KEY[region]}`;
        case "달서구":
            return `uddi:448c0172-6fae-43af-a5a5-d48c50fbac14?page=${page}&perPage=${perpage}&serviceKey=${DATA_API_KEY[region]}`;
        case "서구":
            return `uddi:cb541318-d90b-4bb3-be27-db9c32fa47ec?page=${page}&perPage=${perpage}&serviceKey=${DATA_API_KEY[region]}`;
        case "달성군":
            return `uddi:cc1242c4-441c-4ad0-9b20-ce74538c775f?page=${page}&perPage=${perpage}&serviceKey=${DATA_API_KEY[region]}`;
        // case "중구":
        //     return `uddi:37782167-d720-4858-af83-aa92600d370f?page=${page}&perPage=${perpage}&serviceKey=${DATA_API_KEY[region]}`;
    }
};
