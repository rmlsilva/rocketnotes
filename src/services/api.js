import axios from "axios";

export const api = axios.create({
    baseURL: "http://rocketnotes-api2.onrender.com"
});

api.get("/user/:id")