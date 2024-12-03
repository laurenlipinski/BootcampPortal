// src/services/api.ts
import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000", // Backend URL
});

export const register = (username: string, password: string) =>
    api.post("/register", { username, password });

export const login = (username: string, password: string) =>
    api.post("/login", { username, password });
