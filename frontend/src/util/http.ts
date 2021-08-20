import axios from 'axios';

const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://weighme-api.herokuapp.com/api'
    : 'http://localhost:5000/api';

const HTTP_HEADERS = {
  headers: {
    'content-type': 'application/json',
  },
};

const getWithToken = (token: string, endpoint: string) =>
  axios.get(API_BASE_URL + endpoint, {
    headers: {
      ...HTTP_HEADERS.headers,
      Authorization: `Bearer ${token}`,
    },
  });

const postWithToken = (token: string, data: any, endpoint: string) =>
  axios.post(API_BASE_URL + endpoint, data, {
    headers: {
      ...HTTP_HEADERS.headers,
      Authorization: `Bearer ${token}`,
    },
  });

const postUser = (user: string, endpoint: string) =>
  axios.post(API_BASE_URL + endpoint, user, HTTP_HEADERS);

export const getProfile = (token: string) => getWithToken(token, '/profile');

export const updateProfile = (token: string, profile: any) =>
  postWithToken(token, profile, '/profile');

export const getWeighings = (token: string) =>
  getWithToken(token, '/weighings');

export const createWeighing = (token: string, weighing: any) =>
  postWithToken(token, weighing, '/add_weighing');

export const updateWeighing = (token: string, weighing: any) =>
  postWithToken(token, weighing, '/update_weighing');

export const deleteWeighing = (token: string, weighing: any) =>
  postWithToken(token, weighing, '/delete_weighing');

export const loginUser = (user: any) => postUser(user, '/login');

export const registerUser = (user: any) => postUser(user, '/register');
