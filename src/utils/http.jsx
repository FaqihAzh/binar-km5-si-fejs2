import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies";

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: "Application/json",
    "Content-Type": "Application/json",
  },
});

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${
      CookieStorage.get(CookieKeys.AuthToken)
        ? CookieStorage.get(CookieKeys.AuthToken)
        : ""
    }`,
  };
  return config;
});

export default http;
