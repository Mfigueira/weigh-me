import { combineReducers } from 'redux';
import notificationReducer from './notificationReducer';
import authUserReducer from './authUserReducer';
import weighingsReducer from './weighingsReducer';

const reducers = combineReducers({
  authUser: authUserReducer,
  weighings: weighingsReducer,
  notification: notificationReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
