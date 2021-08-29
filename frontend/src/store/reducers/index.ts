import { combineReducers } from 'redux';
import notificationReducer from './notificationReducer';
import profileReducer from './profileReducer';
import weighingsReducer from './weighingsReducer';

const reducers = combineReducers({
  profile: profileReducer,
  weighings: weighingsReducer,
  notification: notificationReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
