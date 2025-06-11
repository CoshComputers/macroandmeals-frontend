import axios from 'axios';
import { useAuthStore } from '@/features/userandmeals/store/authStore';
import {notify} from "@/core/services/notify.ts";
import {logError} from "@/core/services/logEvent.ts";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optionally inject the token into all requests
API.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// core/api/api.ts
API.interceptors.response.use(
    (response) => response,
    (error) => {
        // Extract message from known structure
        const message =
            error?.response?.data?.message ||
            error?.response?.data?.error ||
            'An unexpected error occurred.';

        notify.error(message);

        logError(message, {
            url: error?.config?.url,
            method: error?.config?.method,
            status: error?.response?.status,
            data: error?.config?.data,
            response: error?.response?.data,
        });

        // Re-throw with cleaned-up error for local use
        return Promise.reject(new Error(message));
    }
);


export default API;
