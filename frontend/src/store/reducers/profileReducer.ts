import { Profile } from '../../models';
import { ActionType } from '../action-types';
import { ProfileAction } from '../actions';

const defaultState: Profile = {
  username: '',
};

const profileReducer = (
  state = defaultState,
  action: ProfileAction
): Profile => {
  if (action.type === ActionType.SET_PROFILE) {
    return {
      username: action.payload.profile.username,
    };
  }

  return state;
};

export default profileReducer;
