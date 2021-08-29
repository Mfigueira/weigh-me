import { AuthUser } from '../../models';
import { getTokenFromStorage } from '../../util/helpers';
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

  if (action.type === ActionType.LOGOUT_USER) {
    return {
      token: '',
      username: '',
    };
  }

  return state;
};

export default userProfileReducer;
