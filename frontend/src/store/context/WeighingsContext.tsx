/**
 * FILE CURRENTLY NOT MANTAINED - THIS IS JUST A CONTEXT CODE EXAMPLE
 */

import React, { useState, Dispatch, SetStateAction } from 'react';
import { Weighing } from '../../models';

interface WeighingsContextObj {
  weighings: Weighing[];
  setWeighings: Dispatch<SetStateAction<Weighing[]>>;
  onAddWeighing: (weighing: Weighing) => void;
  onEditWeighing: (weighing: Weighing) => void;
  onRemoveWeighing: (id: number) => void;
}

export const WeighingsContext = React.createContext<WeighingsContextObj>({
  weighings: [],
  setWeighings: () => [],
  onAddWeighing: () => {},
  onEditWeighing: () => {},
  onRemoveWeighing: () => {},
});

export const WeighingsContextProvider: React.FC = ({ children }) => {
  const [weighings, setWeighings] = useState<Weighing[]>([]);

  const handleAddWeighing = (weighing: Weighing) =>
    setWeighings((currWeighings) =>
      [...currWeighings, weighing].sort(
        (a, b) => Number(new Date(b.datetime)) - Number(new Date(a.datetime))
      )
    );

  const handleEditWeighing = (weighing: Weighing) =>
    setWeighings((currWeighings) =>
      currWeighings.map((currWeighing) =>
        currWeighing.id === weighing.id ? weighing : currWeighing
      )
    );

  const handleRemoveWeighing = (id: number) =>
    setWeighings((currWeighings) =>
      currWeighings.filter((currWeighing) => currWeighing.id !== id)
    );

  const ctxValue = {
    weighings,
    setWeighings,
    onAddWeighing: handleAddWeighing,
    onEditWeighing: handleEditWeighing,
    onRemoveWeighing: handleRemoveWeighing,
  };

  return (
    <WeighingsContext.Provider value={ctxValue}>
      {children}
    </WeighingsContext.Provider>
  );
};
