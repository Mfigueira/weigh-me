import { ActionType } from '../action-types';
import { WeighingsAction } from '../actions';
import { Weighing } from '../../models';

const defaultState: Weighing[] = [];

const weighingsReducer = (
  state = defaultState,
  action: WeighingsAction
): Weighing[] => {
  if (action.type === ActionType.SET_WEIGHINGS) {
    return action.payload.weighings;
  }

  if (action.type === ActionType.ADD_WEIGHING) {
    return [...state, action.payload.weighing].sort(
      (a, b) => Number(new Date(b.datetime)) - Number(new Date(a.datetime))
    );
  }

  if (action.type === ActionType.EDIT_WEIGHING) {
    const { weighing } = action.payload;
    return state.map((currWeighing) =>
      currWeighing.id === weighing.id ? weighing : currWeighing
    );
  }

  if (action.type === ActionType.DELETE_WEIGHING) {
    return state.filter(
      (currWeighing) => currWeighing.id !== action.payload.id
    );
  }

  return state;
};

export default weighingsReducer;
