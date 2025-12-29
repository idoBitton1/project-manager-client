const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8081';

export const SERVER_ENDPOINTS = {
    AUTH: {
        REGISTER: `${BACKEND_URL}/api/v1/auth/register`,
        LOGIN: `${BACKEND_URL}/api/v1/auth/login`,
        REFRESH: `${BACKEND_URL}/api/v1/auth/refresh`,
        LOGOUT: `${BACKEND_URL}/api/v1/auth/logout`
    }
};