import { routes } from './routes';

export const getRouteByPath = (path: string) =>
  routes.find((route) => route.path === path)?.tab ?? 0;

export const getRouteByTab = (tab: number) =>
  routes.find((route) => route.tab === tab)?.path ?? '';

export const formatDateTimeOrGetNow = (dt?: string) => {
  const now = dt ? new Date(dt) : new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, '0');
  const day = `${now.getDate()}`.padStart(2, '0');
  const hours = `${now.getHours()}`.padStart(2, '0');
  const minutes = `${now.getMinutes()}`.padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const extractSecsFromTime = (time: string) =>
  time.split(':').length > 2 ? time.slice(0, time.lastIndexOf(':')) : time;

export const monthNames = Array.from({ length: 12 }, (_, i) =>
  new Date(0, i).toLocaleString('en-US', { month: 'long' })
);

export const getMonthFromDate = (date: string) =>
  monthNames[new Date(date).getMonth()];

export const isUsernameValid = (username: string) =>
  /^[\S]{0,12}$/.test(username);

export const isPasswordValid = (password: string) =>
  /^[\S]{0,20}$/.test(password);

export const isWeightValid = (weight: string) =>
  /^[0-9]{0,3}([.]{1}[0-9]{0,2}){0,1}$/.test(weight);

export const saveTokenInStorage = (token: string) =>
  localStorage.setItem('token', token);

export const getTokenFromStorage = () => localStorage.getItem('token') ?? '';

export const removeTokenFromStorage = () => localStorage.removeItem('token');

export const inputNumberKeyInvalid = (key: string) =>
  key === 'e' || key === 'E' || key === '+' || key === '-';
