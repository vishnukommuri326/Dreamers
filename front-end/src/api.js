import axios from 'axios';
// Create an axios instance
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://64.225.57.7:5001/api', // Flexible base URL
    timeout: 5000, // Timeout for requests
    headers: { 'Content-Type': 'application/json' },


});




// API Calls
export const getUserSettings = async (username) => {
    try {
        console.log(`GET request to /users/${username}`); // Debug log
        const response = await api.get(`api/users/${username}`); // Ensure /users endpoint
        return response.data;
    } catch (error) {
        console.error('Error in getUserSettings API:', error); // Debug log for errors
        throw error;
    }
};

// Function to update user settings
export const updateUserSettings = async (username, settings) => {
    try {
        console.log(`PUT request to /users/${username}`, settings); // Debug log
        const response = await api.put(`api/users/${username}`, settings); // Ensure /users endpoint


        return response.data;
    } catch (error) {
        console.error('Error in updateUserSettings API:', error); // Debug log for errors
        throw error;
    }
};

export default api;

