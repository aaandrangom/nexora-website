import axios from 'axios';
const ENV = import.meta.env.VITE_REACT_APP_ENV;
const PRODUCTION = import.meta.env.VITE_REACT_APP_BACKEND_API_URL_DEPLOY;
const DEVELOPMENT = import.meta.env.VITE_REACT_APP_BACKEND_API_URL;
const BASE_URL = ENV === 'production' ? PRODUCTION : DEVELOPMENT;

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default apiClient;