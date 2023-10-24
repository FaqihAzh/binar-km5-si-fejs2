const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
  NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
};

const API_ENDPOINT = {
  POPULAR: "/api/v1/movie/popular",
  REGISTER: "/api/v1/auth/register",
  LOGIN: "/api/v1/auth/login",
  GET_USER: "/api/v1/auth/me",
};

export { ENDPOINTS, API_ENDPOINT };
