import axiosClient from "./axios.config";

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
