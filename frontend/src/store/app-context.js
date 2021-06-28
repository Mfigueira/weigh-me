import React from 'react';

export const AppContext = React.createContext({
  profile: undefined,
  weighings: [],
  alert: {},
  onAddWeighing: () => {},
  onEditWeighing: () => {},
  onRemoveWeighing: () => {},
  onSuccessAlert: () => {},
  onErrorAlert: () => {},
  onCloseAlert: () => {},
});
