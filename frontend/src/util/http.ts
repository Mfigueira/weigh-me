import axios from 'axios';
import { Weighing, User, Profile } from '../models';

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
  axios.post(API_BASE_URL + endpoint, JSON.stringify(data), {
    headers: {
      ...HTTP_HEADERS.headers,
      Authorization: `Bearer ${token}`,
    },
  });

const postUser = (user: User, endpoint: string) =>
  axios.post(API_BASE_URL + endpoint, JSON.stringify(user), HTTP_HEADERS);

export const loginUser = (user: User) => postUser(user, '/login');

export const registerUser = (user: User) => postUser(user, '/register');

export const getProfile = (token: string) => getWithToken(token, '/profile');

export const updateProfile = (token: string, profile: Profile) =>
  postWithToken(token, profile, '/profile');

export const getWeighings = (token: string) =>
  getWithToken(token, '/weighings');

export const createWeighing = (token: string, weighing: Weighing) =>
  postWithToken(token, weighing, '/add_weighing');

export const updateWeighing = (token: string, weighing: Weighing) =>
  postWithToken(token, weighing, '/update_weighing');

export const deleteWeighing = (token: string, id: number) =>
  postWithToken(token, { id }, '/delete_weighing');
