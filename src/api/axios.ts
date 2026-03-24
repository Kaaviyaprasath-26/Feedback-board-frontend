import axios from "axios";
import { getToken, removeToken } from "../common/utils/token.utils";
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_DOMAIN + import.meta.env.BASE_URL;
console.log('base url', baseURL);

export const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use((res) => {
    return res.data;
},
    (err) => {
        const statusCode = err?.response?.status;
        const navigate = useNavigate();

        switch (statusCode) {
            case 400:
                console.error("Bad Request");
                break;

            case 401:
                console.error("Unauthorized - Token expired");

                // 🔐 logout user
                removeToken();
                navigate("/login");
                break;

            case 403:
                console.error("Forbidden");
                break;

            case 404:
                console.error("Not Found");
                break;

            case 500:
                console.error("Server Error");
                break;

            default:
                console.error("Unexpected Error");
        }

        return Promise.reject(err);
    }
);