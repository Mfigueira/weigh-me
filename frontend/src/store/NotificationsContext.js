import React, { useCallback, useState } from 'react';

const DEFAULT_ALERT = {
  open: false,
  message: '',
  severity: 'success',
};

export const NotificationsContext = React.createContext({
  alert: {},
  onCloseAlert: () => {},
  onSuccessAlert: () => {},
  onErrorAlert: () => {},
});

export const NotificationsContextProvider = ({ children }) => {
  const [alert, setAlert] = useState(DEFAULT_ALERT);

  const handleCloseAlert = useCallback(
    () =>
      setAlert(alert => ({
        ...alert,
        open: false,
      })),
    []
  );

  const handleSuccessAlert = useCallback(
    message => {
      handleCloseAlert();
      setTimeout(() => {
        setAlert({
          open: true,
          message,
          severity: 'success',
        });
      }, 150);
    },
    [handleCloseAlert]
  );

  const handleErrorAlert = useCallback(
    err => {
      console.error(err);
      handleCloseAlert();
      setTimeout(() => {
        setAlert({
          open: true,
          message: err.response?.data?.msg ?? 'An unexpected error ocurred.',
          severity: 'error',
        });
      }, 150);
    },
    [handleCloseAlert]
  );

  return (
    <NotificationsContext.Provider
      value={{
        alert,
        onCloseAlert: handleCloseAlert,
        onSuccessAlert: handleSuccessAlert,
        onErrorAlert: handleErrorAlert,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
