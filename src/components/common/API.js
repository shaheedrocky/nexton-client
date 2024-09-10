import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:8000/api',  // Set your base URL
    timeout: 5000, // Set timeout to 5 seconds (you can adjust this)
    headers: {
        'Content-Type': 'application/json',  // Default content type for your API requests
    }
});

// Add a request interceptor (Optional: for adding tokens or modifying requests)
api.interceptors.request.use(
    (config) => {
        // Example: add an Authorization token if available
        const token = localStorage.getItem('token');  // Or get from wherever you store it
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor (Optional: for error handling)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle errors, such as token expiration, network issues, etc.
        if (error.response && error.response.status === 401) {
            // Token expired or unauthorized
            console.log('Unauthorized, logging out...');
            // Handle logout, redirect to login page, etc.
            // Example: window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
