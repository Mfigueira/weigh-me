import React, { useCallback, useState } from 'react';
import {
  getTokenFromStorage,
  saveTokenInStorage,
  removeTokenFromStorage,
} from '../util/helpers';

interface AuthContextObj {
  token: string | null;
  onLogin: (token: string) => void;
  onLogout: () => void;
}

export const AuthContext = React.createContext<AuthContextObj>({
  token: null,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState(getTokenFromStorage());

  const handleLogin = useCallback((token) => {
    saveTokenInStorage(token);
    setToken(token);
  }, []);

  const handleLogout = useCallback(() => {
    removeTokenFromStorage();
    setToken(null);
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
