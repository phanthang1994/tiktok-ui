import axios from "axios";

const request = axios.create({
    baseURL: "https://tiktok.fullstack.edu.vn/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const get = async (path, optinos = {}) => {
    const response = await request.get(path, optinos);
    return response.data;
}; 

export default request;