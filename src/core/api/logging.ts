// src/core/api/logging.ts
import axios from 'axios';

const LoggingAPI = axios.create({
    baseURL: import.meta.env.VITE_LOGGING_ENDPOINT || '', // fallback to empty string in dev
    headers: { 'Content-Type': 'application/json' },
});

export default LoggingAPI;
