import React, { useState } from 'react';
import {
  getTokenFromStorage,
  saveTokenInStorage,
  removeTokenFromStorage,
} from '../../util/helpers';

interface AuthContextObj {
  token: string;
  onLogin: (token: string) => void;
  onLogout: () => void;
}

export const AuthContext = React.createContext<AuthContextObj>({
  token: '',
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState(getTokenFromStorage());

  const handleLogin = (token: string) => {
    saveTokenInStorage(token);
    setToken(token);
  };

  const handleLogout = () => {
    removeTokenFromStorage();
    setToken('');
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
