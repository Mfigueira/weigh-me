import { AuthUser } from '../../models';
import {
  getTokenFromStorage,
  removeTokenFromStorage,
  saveTokenInStorage,
} from '../../util/helpers';
import { ActionType } from '../action-types';
import { AuthAction } from '../actions';

const defaultState: AuthUser = {
  token: getTokenFromStorage(),
  username: '',
};

const userProfileReducer = (
  state = defaultState,
  action: AuthAction
): AuthUser => {
  if (action.type === ActionType.SET_PROFILE) {
    return {
      ...state,
      username: action.payload.username,
    };
  }

  if (action.type === ActionType.AUTHENTICATE_USER) {
    saveTokenInStorage(action.payload.token);
    return action.payload;
  }

  if (action.type === ActionType.LOGOUT_USER) {
    removeTokenFromStorage();
    return {
      token: '',
      username: '',
    };
  }

  return state;
};

export default userProfileReducer;
