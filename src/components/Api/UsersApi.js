import axios from "axios";

const baseURL = 'api.github.com';
const usersPath = 'search/users';
const userPath = 'users'

/**
 * 
 * @param {string} searchTerm 
 */
export const searchUsers = async (searchTerm) => {
    const url = `https://${baseURL}/${usersPath}`;
    try {
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

/**
 * 
 * @param {string} user 
 */
export const fetchUserDetails = async (user) => {
    const getUser = axios.get(`https://${baseURL}/${userPath}/${user}`)
    const getStarred = axios.get(`https://${baseURL}/${userPath}/${user}/starred`);
    const getUserRepos = axios.get(`https://${baseURL}/${userPath}/${user}/repos`);
    const getUsersOrgs = axios.get(`https://${baseURL}/${userPath}/${user}/orgs`);

    try {
        const response = await Promise.all([getUser, getStarred, getUserRepos, getUsersOrgs ]);
        return response;
    } catch (error) {
        return error;
    }
}