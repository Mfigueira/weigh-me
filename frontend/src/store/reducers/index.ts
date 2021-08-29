import { combineReducers } from 'redux';
import notificationReducer from './notificationReducer';
import weighingsReducer from './weighingsReducer';

const reducers = combineReducers({
  weighings: weighingsReducer,
  notification: notificationReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
