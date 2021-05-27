import { navTabs } from '../config/navTabs.js';

export const formatDateTimeOrGetNow = dt => {
  const now = dt ? new Date(dt) : new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, 0);
  const day = `${now.getDate()}`.padStart(2, 0);
  const hours = `${now.getHours()}`.padStart(2, 0);
  const minutes = `${now.getMinutes()}`.padStart(2, 0);
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const getRouteByPath = path =>
  navTabs.find(route => route.path === path)?.tab ?? 0;

export const getRouteByTab = tab =>
  navTabs.find(route => route.tab === tab)?.path ?? 0;

export const extractSecsFromTime = time =>
  time.split(':').length > 2 ? time.slice(0, time.lastIndexOf(':')) : time;

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getMonthFromDate = date => monthNames[new Date(date).getMonth()];

export const isUsernameValid = username => /^[\S]{0,12}$/.test(username);

export const isPasswordValid = password => /^[\S]{0,20}$/.test(password);

export const isWeightValid = weight =>
  /^[0-9]{0,3}([.]{1}[0-9]{0,2}){0,1}$/.test(weight);

export const saveTokenInStorage = token => localStorage.setItem('token', token);

export const getTokenFromStorage = () => localStorage.getItem('token');

export const removeTokenFromStorage = () => localStorage.removeItem('token');

const setErrorMsg = err =>
  err.response?.data?.msg ?? 'An unexpected error ocurred.';

export const handleErrorAlert = (err, alert, setAlert) => {
  console.error(err);
  setAlert({ ...alert, open: false });
  setTimeout(() => {
    setAlert({
      open: true,
      message: setErrorMsg(err),
      severity: 'error',
    });
  }, 150);
};

export const handleSuccessAlert = (message, alert, setAlert) => {
  setAlert({ ...alert, open: false });
  setTimeout(() => {
    setAlert({
      open: true,
      message: message,
      severity: 'success',
    });
  }, 150);
};
