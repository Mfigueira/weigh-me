import React, { useCallback, useState } from 'react';
import { Notification } from '../models';

interface NotificationsContextObj {
  alert: Notification;
  onCloseAlert: () => void;
  onSuccessAlert: (message: string) => void;
  onErrorAlert: (err: string) => void;
}

const defaultAlert: Notification = {
  open: false,
  message: '',
  severity: 'success',
};

export const NotificationsContext =
  React.createContext<NotificationsContextObj>({
    alert: defaultAlert,
    onCloseAlert: () => {},
    onSuccessAlert: () => {},
    onErrorAlert: () => {},
  });

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

  const ctxValue = {
    alert,
    onCloseAlert: handleCloseAlert,
    onSuccessAlert: handleSuccessAlert,
    onErrorAlert: handleErrorAlert,
  };

  return (
    <NotificationsContext.Provider value={ctxValue}>
      {children}
    </NotificationsContext.Provider>
  );
};
