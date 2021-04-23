import { navRoutes } from '../config/routes.js';

export const getDateTimeToday = () => {
  let today = new Date()
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

export const getDateFromDT = dt => dt.substring(0, dt.indexOf('T'));

export const getTimeFromDT = dt => `${dt.substring(dt.indexOf('T') + 1)}:00`;

export const getTabByRoute = currentRoute => {
  const tab = navRoutes.filter(route => route.path === currentRoute);
  return (!tab.length) ? 0 : tab[0].tab;
};

export const getRouteByTab = val => {
  const route = navRoutes.filter(route => route.tab === val);
  return (!route.length) ? 0 : route[0].path;
};

export const extractSecsFromTime = t => t.substring(0, t.lastIndexOf(':'));

export const saveTokenInStorage = token => localStorage.setItem('token', token);

export const getTokenFromStorage = () => localStorage.getItem('token');

export const removeTokenFromStorage = () => localStorage.removeItem('token');