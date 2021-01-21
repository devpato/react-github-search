import axios from "axios";

const baseURL = "api.github.com";
const usersPath = 'search/users';

export const searchUsers = async (searchTerm) => {
    const url = `https://${baseURL}/${usersPath}`;
    try {
        console.log('get')
        const response = await axios.get(url, {
            params: {
                q: searchTerm
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}