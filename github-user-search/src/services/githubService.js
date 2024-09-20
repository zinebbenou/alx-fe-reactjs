import axios from 'axios';

const API_URL = 'https://api.github.com/search/users?q';

export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`${API_URL}users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const searchUsers = async (query, location, minRepos) => {
    try {
        const response = await axios.get(`${API_URL}search/users`, {
            params: {
                q: query,
                location: location,
                minRepos: minRepos,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('Error searching users:', error);
        throw error;
    }
};