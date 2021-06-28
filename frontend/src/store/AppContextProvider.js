import React, { useState, useEffect, useContext } from 'react';
import { getProfile, getWeighings } from '../util/requests';
import { AppContext } from './app-context';
import { AuthContext } from './auth-context';

export const AppContextProvider = ({ children }) => {
  const authCtx = useContext(AuthContext);

  const [profile, setProfile] = useState(undefined);
  const [weighings, setWeighings] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    if (authCtx.token) {
      (async () => {
        try {
          const pr1 = getProfile(authCtx.token);
          const pr2 = getWeighings(authCtx.token);
          const [profileRes, weighingsRes] = await Promise.all([pr1, pr2]);
          setProfile(profileRes.data);
          setWeighings(weighingsRes.data);
        } catch (err) {
          console.error(err);
          setProfile(undefined);
          setWeighings([]);
          authCtx.onLogout();
          setAlert({
            open: true,
            message: 'Could not fetch user data',
            severity: 'error',
          });
        }
      })();
    }
  }, [authCtx]);

  const handleCloseAlert = () =>
    setAlert(alert => ({
      ...alert,
      open: false,
    }));

  const handleOpenAlert = (message, severity) => {
    handleCloseAlert();
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
    handleOpenAlert(
      err.response?.data?.msg ?? 'An unexpected error ocurred.',
      'error'
    );
  };

  const handleSuccessAlert = message => handleOpenAlert(message, 'success');

  const handleAddWeighing = weighing =>
    setWeighings(currWeighings =>
      [...currWeighings, weighing].sort(
        (a, b) => new Date(b.datetime) - new Date(a.datetime)
      )
    );

  const handleEditWeighing = weighing =>
    setWeighings(currWeighings =>
      currWeighings.map(currWeighing =>
        currWeighing.id === weighing.id ? weighing : currWeighing
      )
    );

  const handleRemoveWeighing = id =>
    setWeighings(currWeighings =>
      currWeighings.filter(currWeighing => currWeighing.id !== id)
    );

  const ctxValue = {
    profile,
    weighings,
    alert,
    onAddWeighing: handleAddWeighing,
    onEditWeighing: handleEditWeighing,
    onRemoveWeighing: handleRemoveWeighing,
    onSuccessAlert: handleSuccessAlert,
    onErrorAlert: handleErrorAlert,
    onCloseAlert: handleCloseAlert,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};
