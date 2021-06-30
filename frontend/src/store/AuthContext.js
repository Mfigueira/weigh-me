import React, { useCallback, useState } from 'react';
import {
  getTokenFromStorage,
  saveTokenInStorage,
  removeTokenFromStorage,
} from '../util/helpers';

export const AuthContext = React.createContext({
  token: null,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getTokenFromStorage());

  const handleLogin = useCallback(token => {
    saveTokenInStorage(token);
    setToken(token);
  }, []);

  const handleLogout = useCallback(() => {
    removeTokenFromStorage();
    setToken(undefined);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
