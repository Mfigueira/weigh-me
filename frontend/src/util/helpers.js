import { navRoutes } from '../config/routes.js';

export const formatDateTimeOrGetToday = dt => {
  let today = dt ? new Date(dt) : new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  day = (day < 10) ? ('0' + day) : day;
  month = (month < 10) ? ('0' + month) : month;

  let hours = today.getHours();
  let minutes = today.getMinutes();
  hours = (hours < 10) ? ('0' + hours) : hours;
  minutes = (minutes < 10) ? ('0' + minutes) : minutes;

  return `${year}-${month}-${day}T${hours}:${minutes}`
}

export const getTabByRoute = currentRoute => {
  const tab = navRoutes.filter(route => route.path === currentRoute);
  return (!tab.length) ? 0 : tab[0].tab;
};

export const getRouteByTab = val => {
  const route = navRoutes.filter(route => route.tab === val);
  return (!route.length) ? 0 : route[0].path;
};

export const extractSecsFromTime = t => {
  const io = t.indexOf(':');
  const lio = t.lastIndexOf(':');
  return io === lio ? t : t.substring(0, t.lastIndexOf(':'));
}

export const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const getMonthFromDate = date => {
  const d = new Date(date);
  return monthNames[d.getMonth()];
}

export const isUsernameValid = username => /^[\S]{0,12}$/.test(username);

export const isPasswordValid = password => /^[\S]{0,20}$/.test(password);

export const isWeightValid = weight => /^[0-9]{0,3}([.]{1}[0-9]{0,2}){0,1}$/.test(weight);

export const saveTokenInStorage = token => localStorage.setItem('token', token);

export const getTokenFromStorage = () => localStorage.getItem('token');

export const removeTokenFromStorage = () => localStorage.removeItem('token');

const setErrorMsg = err => {
  let message = 'An unexpected error has ocurred.';
  try { message = err.response.data.msg; }
  finally { return message; }
}

export const handleErrorAlert = (err, alert, setAlert) => {
  console.error(err);
  setAlert({ ...alert, open: false });
  setTimeout(() => {
    setAlert({
      open: true,
      message: setErrorMsg(err),
      severity: 'error'
    });
  }, 150);
}

export const handleSuccessAlert = (message, alert, setAlert) => {
  setAlert({ ...alert, open: false });
  setTimeout(() => {
    setAlert({
      open: true,
      message: message,
      severity: 'success'
    });
  }, 150);
}