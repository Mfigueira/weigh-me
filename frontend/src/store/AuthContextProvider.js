import React, { useState } from 'react';
import {
  getTokenFromStorage,
  saveTokenInStorage,
  removeTokenFromStorage,
} from '../util/helpers';
import { AuthContext } from './auth-context';

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getTokenFromStorage());

  const handleLogin = token => {
    saveTokenInStorage(token);
    setToken(token);
  };

  const handleLogout = () => {
    removeTokenFromStorage();
    setToken(undefined);
  };

  const ctxValue = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
};
