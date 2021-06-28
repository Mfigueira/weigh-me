import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  getRouteByPath,
  getTokenFromStorage,
  saveTokenInStorage,
  removeTokenFromStorage,
} from '../util/helpers';
import { getProfile, getWeighings } from '../util/requests';

const AppContext = React.createContext({
  token: undefined,
  profile: undefined,
  weighings: [],
  tabValue: 0,
  alert: {},
  onAddWeighing: () => {},
  onEditWeighing: () => {},
  onRemoveWeighing: () => {},
  onLogin: () => {},
  onLogout: () => {},
  onSuccessAlert: () => {},
  onErrorAlert: () => {},
  setTabValue: () => {},
  setAlert: () => {},
});

export const AppContextProvider = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const [token, setToken] = useState(getTokenFromStorage());
  const [profile, setProfile] = useState(null);
  const [weighings, setWeighings] = useState([]);
  const [tabValue, setTabValue] = useState(() =>
    getRouteByPath(location.pathname)
  );
  const [alert, setAlert] = useState({
    open: false,
    message: 'success',
    severity: 'success',
  });

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const pr1 = getProfile(token);
          const pr2 = getWeighings(token);
          const [profileResponse, weighingsResponse] = await Promise.all([
            pr1,
            pr2,
          ]);

          setProfile(profileResponse.data);
          setWeighings(weighingsResponse.data);
        } catch (err) {
          console.error(err);
          removeTokenFromStorage();
          setToken(null);
          setProfile(null);
          setTabValue(0);
          setWeighings([]);
          setAlert({
            open: true,
            message: 'Could not fetch user data',
            severity: 'error',
          });
        }
      })();
    }
  }, [token]);

  const handleAlert = (message, severity) => {
    setAlert(alert => ({ ...alert, open: false }));
    setTimeout(() => {
      setAlert({
        open: true,
        message,
        severity,
      });
    }, 150);
  };

  const handleErrorAlert = err => {
    console.error(err);
    handleAlert(
      err.response?.data?.msg ?? 'An unexpected error ocurred.',
      'error'
    );
  };

  const handleSuccessAlert = message => handleAlert(message, 'success');

  const handleAddWeighing = weighing =>
    setWeighings(currentWeighings =>
      [...currentWeighings, weighing].sort(
        (a, b) => new Date(b.datetime) - new Date(a.datetime)
      )
    );

  const handleEditWeighing = weighing =>
    setWeighings(
      weighings.map(currentWeighing =>
        currentWeighing.id === weighing.id ? weighing : currentWeighing
      )
    );

  const handleRemoveWeighing = id =>
    setWeighings(
      weighings.filter(currentWeighing => currentWeighing.id !== id)
    );

  const handleLogin = token => {
    saveTokenInStorage(token);
    setToken(token);
  };

  const handleLogout = () => {
    removeTokenFromStorage();
    setToken(undefined);
    setProfile(undefined);
    history.push('/');
    setTabValue(0);
    handleSuccessAlert('Until next time!');
  };

  return (
    <AppContext.Provider
      value={{
        token,
        profile,
        weighings,
        tabValue,
        alert,
        onAddWeighing: handleAddWeighing,
        onEditWeighing: handleEditWeighing,
        onRemoveWeighing: handleRemoveWeighing,
        onLogin: handleLogin,
        onLogout: handleLogout,
        onSuccessAlert: handleSuccessAlert,
        onErrorAlert: handleErrorAlert,
        setTabValue,
        setAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
