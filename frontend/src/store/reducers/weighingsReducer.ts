import { ActionType } from '../action-types';
import { WeighingsAction } from '../actions';
import { Weighing } from '../../models';

interface WeighingsState {
  loading: boolean;
  data: Weighing[];
}

const defaultState: WeighingsState = {
  loading: false,
  data: [],
};

const weighingsReducer = (
  state = defaultState,
  action: WeighingsAction
): WeighingsState => {
  if (action.type === ActionType.INIT_WEIGHINGS_HTTP_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ActionType.SET_WEIGHINGS) {
    return {
      loading: false,
      data: action.payload.weighings,
    };
  }

  if (action.type === ActionType.ADD_WEIGHING) {
    return {
      loading: false,
      data: [...state.data, action.payload.weighing].sort(
        (a, b) => Number(new Date(b.datetime)) - Number(new Date(a.datetime))
      ),
    };
  }

  if (action.type === ActionType.EDIT_WEIGHING) {
    const { weighing } = action.payload;
    return {
      loading: false,
      data: state.data.map((currWeighing) =>
        currWeighing.id === weighing.id ? weighing : currWeighing
      ),
    };
  }

  if (action.type === ActionType.DELETE_WEIGHING) {
    return {
      loading: false,
      data: state.data.filter(
        (currWeighing) => currWeighing.id !== action.payload.id
      ),
    };
  }

  return state;
};

export default weighingsReducer;
