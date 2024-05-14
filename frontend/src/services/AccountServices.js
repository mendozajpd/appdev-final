import axiosClient from "./axios.config";

export const BACKEND_URL = 'http://localhost:8000';

export const getPFP = (image) => {
    return `${BACKEND_URL}/storage/profile_pics/${image}`;
}

export const getProfile = async (token) => {
    try {
        const response = await axiosClient.get('/me', {
            headers: {
                Authorization: `${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error during getting profile:', error);
        throw error;
    }
}

export const register = async (userData) => {
    try {
        console.log(userData);
        const response = await axiosClient.post('/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await axiosClient.post('/login', { email, password });
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const logout = async (token) => {
    try {
        const response = await axiosClient.post('/logout', {}, {
            headers: {
                Authorization: `${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error during logout:', error);
        throw error;
    }
}