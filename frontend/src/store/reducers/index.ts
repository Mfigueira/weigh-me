import { combineReducers } from 'redux';
import notificationReducer from './notificationReducer';
import userProfileReducer from './userProfileReducer';
import weighingsReducer from './weighingsReducer';

const reducers = combineReducers({
  userProfile: userProfileReducer,
  weighings: weighingsReducer,
  notification: notificationReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
