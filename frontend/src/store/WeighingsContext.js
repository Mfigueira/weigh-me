import React, { useState } from 'react';

export const WeighingsContext = React.createContext({
  weighings: [],
  setWeighings: () => {},
  onAddWeighing: () => {},
  onEditWeighing: () => {},
  onRemoveWeighing: () => {},
});

export const WeighingsContextProvider = ({ children }) => {
  const [weighings, setWeighings] = useState([]);

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
    <WeighingsContext.Provider
      value={{
        weighings,
        setWeighings: setWeighings,
        onAddWeighing: handleAddWeighing,
        onEditWeighing: handleEditWeighing,
        onRemoveWeighing: handleRemoveWeighing,
      }}
    >
      {children}
    </WeighingsContext.Provider>
  );
};
