import React, { useState, useEffect, useContext } from 'react';
import { getProfile, getWeighings } from '../util/requests';
import { AuthContext } from './AuthContext';
import { useNotifications } from './NotificationsContext';

export const UserDataContext = React.createContext({
  profile: {},
  weighings: [],
  onAddWeighing: () => {},
  onEditWeighing: () => {},
  onRemoveWeighing: () => {},
});

export const UserDataContextProvider = ({ children }) => {
  const { token, onLogout } = useContext(AuthContext);
  const { onErrorAlert } = useNotifications();

  const [profile, setProfile] = useState({});
  const [weighings, setWeighings] = useState([]);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const pr1 = getProfile(token);
          const pr2 = getWeighings(token);
          const [profileRes, weighingsRes] = await Promise.all([pr1, pr2]);
          setProfile(profileRes.data);
          setWeighings(weighingsRes.data);
        } catch (err) {
          setProfile(undefined);
          setWeighings([]);
          onLogout();
          onErrorAlert(err);
        }
      })();
    }
  }, [token, onLogout, onErrorAlert]);

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

  return (
    <UserDataContext.Provider
      value={{
        profile,
        weighings,
        onAddWeighing: handleAddWeighing,
        onEditWeighing: handleEditWeighing,
        onRemoveWeighing: handleRemoveWeighing,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
