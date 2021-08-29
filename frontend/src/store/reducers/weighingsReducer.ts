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

  if (action.type === ActionType.EDIT_WEIGHING) {
    return state;
  }

  if (action.type === ActionType.DELETE_WEIGHING) {
    return state;
  }

  return state;
};

export default weighingsReducer;
