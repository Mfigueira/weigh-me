import axios from 'axios';
import { getTokenFromStorage } from './helpers';

export const SERVER_BASE_URL = 'http://localhost:5000/api';

export const getWeighings = () => axios.get(SERVER_BASE_URL + '/weighings', {
    headers: {
        'Authorization': `Bearer ${getTokenFromStorage()}`
    }
});

export const addNewWeighing = weighing => 
    axios.post(SERVER_BASE_URL + '/add_weighing', weighing, {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${getTokenFromStorage()}`
        }
    });

export const loginUser = user => 
    axios.post(SERVER_BASE_URL + '/login', user, {
        headers: {
            'content-type': 'application/json'
        }
    });

export const registerUser = user => 
    axios.post(SERVER_BASE_URL + '/register', user, {
        headers: {
            'content-type': 'application/json'
        }
    });