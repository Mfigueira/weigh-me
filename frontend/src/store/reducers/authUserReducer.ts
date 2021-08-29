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
  if (action.type === ActionType.AUTHENTICATE_USER) {
    return action.payload.user;
  }

  if (action.type === ActionType.LOGOUT_USER) {
    return defaultState;
  }

  return state;
};

export default userProfileReducer;
