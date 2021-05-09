import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const HTTP_HEADERS = {
    headers: {
        'content-type': 'application/json'
    }
}

const getWithToken = (token, endpoint) =>
    axios.get(API_BASE_URL + endpoint, {
        headers: {
            ...HTTP_HEADERS.headers,
            'Authorization': `Bearer ${token}`
        }
    });

const postWithToken = (token, data, endpoint) =>
    axios.post(API_BASE_URL + endpoint, data, {
        headers: {
            ...HTTP_HEADERS.headers,
            'Authorization': `Bearer ${token}`
        }
    });

const postUser = (user, endpoint) =>
    axios.post(API_BASE_URL + endpoint, user, HTTP_HEADERS);

export const getProfile = token => getWithToken(token, '/profile');

export const updateProfile = (token, profile) => postWithToken(token, profile, '/profile');

export const getWeighings = token => getWithToken(token, '/weighings');

export const createWeighing = (token, weighing) => postWithToken(token, weighing, '/add_weighing');

export const updateWeighing = (token, weighing) => postWithToken(token, weighing, '/update_weighing');

export const deleteWeighing = (token, weighing) => postWithToken(token, weighing, '/delete_weighing');

export const loginUser = user => postUser(user, '/login');

export const registerUser = user => postUser(user, '/register');