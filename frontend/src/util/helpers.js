export const getDateToday = () => {
    let today = new Date()
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    day = (day < 10) ? ('0' + day) : day;
    month = (month < 10) ? ('0' + month) : month;
    
    return `${year}-${month}-${day}`
}

export const getTimeNow = () => {
    let today = new Date()
    let hours = today.getHours();
    let minutes = today.getMinutes();
    hours = (hours < 10) ? ('0' + hours) : hours;
    minutes = (minutes < 10) ? ('0' + minutes) : minutes;
    
    return `${hours}:${minutes}:00`
}

export const saveTokenInStorage = token => localStorage.setItem('token', token);

export const getTokenFromStorage = () => localStorage.getItem('token');

export const removeTokenFromStorage = () => localStorage.removeItem('token');