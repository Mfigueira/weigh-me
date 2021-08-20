import React, { useCallback, useState } from 'react';

interface Alert {
  open: boolean;
  message: string;
  severity: string;
}

interface NotificationsContextObj {
  alert: Alert | {};
  onCloseAlert: () => void;
  onSuccessAlert: (message: string) => void;
  onErrorAlert: (err: string) => void;
}

export const NotificationsContext =
  React.createContext<NotificationsContextObj>({
    alert: {},
    onCloseAlert: () => {},
    onSuccessAlert: () => {},
    onErrorAlert: () => {},
  });

const defaultAlert: Alert = {
  open: false,
  message: '',
  severity: 'success',
};

export const NotificationsContextProvider: React.FC = ({ children }) => {
  const [alert, setAlert] = useState(defaultAlert);

  const handleCloseAlert = useCallback(
    () =>
      setAlert((alert) => ({
        ...alert,
        open: false,
      })),
    []
  );

  const handleSuccessAlert = useCallback(
    (message) => {
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
    (err) => {
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
